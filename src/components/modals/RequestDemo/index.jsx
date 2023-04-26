import React, {useContext, useState, useEffect} from 'react';
import {Controller, useForm} from 'react-hook-form';
import classNames from 'classnames';
import {FormattedMessage} from 'react-intl';
import {toast} from 'react-toastify';

import {ModalContext} from '~/context/Modal';
import {
  Button,
  Input,
  Label,
  Select,
  Typography,
  PhoneInput,
  CommonSubmitModal,
} from '~/components';
import {REQUEST_DEMO_SCHEMA} from '~/components/modals/RequestDemo/form';
import {Employees, JobRoles} from '~/constants';
import client from '~/api/client';
import endpoints from '~/api/endpoints';
import styles from './RequestDemo.module.scss';

// TODO: Change to import after fix library https://github.com/react-hook-form/resolvers/issues/271
const {yupResolver} = require('@hookform/resolvers/yup');

const RequestDemoModal = () => {
  const {closeModal, openModal} = useContext(ModalContext);
  const [countries, setCountries] = useState([]);

  const {
    register,
    handleSubmit,
    formState: {errors},
    setValue,
    getValues,
    reset,
    control,
  } = useForm({
    resolver: yupResolver(REQUEST_DEMO_SCHEMA),
    mode: 'onTouched',
  });

  const onSubmit = async (values) => {
    try {
      await client.post(endpoints.MainService.sendRequestDemo(), {
        email: values.businessEmail,
        name: values.fullName,
        company: values.company,
        companyURL: values.companyWebsite,
        jobRole: values.jobRole.name,
        employees: values.employees.name,
        country: values.country.name,
        phone: '+' + values.phone,
      });
      reset();
      openModal(
        <CommonSubmitModal
          textSubmitButton={<FormattedMessage id="common.button.close" />}
          onSubmit={closeModal}
          title={
            <span>
              <FormattedMessage id="requestDemo.success.title" />{' '}
              {values.fullName}
            </span>
          }
          text={<FormattedMessage id="requestDemo.success.text" />}
          hasDeclineButton={false}
        />,
      );
    } catch (e) {
      closeModal();
      toast.error(<FormattedMessage id="common.errors.default" />);
    }
  };

  const handleSelect = (option, onChange, onBlur) => {
    onBlur();
    onChange(option);
  };

  const getCountries = () => {
    client
      .get(endpoints.MainService.getCountries())
      .then(({data}) => data.map((country, i) => ({id: i, name: country})))
      .then(setCountries);
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="modal-common" noValidate>
      <span className="modal-common-close" onClick={closeModal}>
        &#10005;
      </span>
      <div className={styles.wrapper__body}>
        <Typography
          type="Extra"
          variant="Heading"
          className={styles.wrapper__title}>
          <FormattedMessage id="requestDemo.title" />
        </Typography>
        <Typography className={styles.wrapper__description}>
          <FormattedMessage id="requestDemo.description" />
        </Typography>
        <Label className={styles.wrapper__label}>
          <div className={styles.wrapper__label_point} />
          <Typography className={styles.wrapper__label_text}>
            <FormattedMessage id="common.form.allFieldsRequired" />
          </Typography>
        </Label>
        <div
          className={classNames(styles.wrapper__item, {
            [styles.wrapper__item_error]: errors?.fullName?.message,
          })}>
          <Input
            label="Full name"
            errorMessage={errors?.fullName?.message}
            {...register('fullName')}
          />
        </div>
        <div
          className={classNames(styles.wrapper__item, {
            [styles.wrapper__item_error]: errors?.company?.message,
          })}>
          <Input
            label="Company"
            errorMessage={errors?.company?.message}
            {...register('company')}
          />
        </div>
        <div
          className={classNames(styles.wrapper__item, {
            [styles.wrapper__item_error]: errors?.companyWebsite?.message,
          })}>
          <Input
            label="Company website"
            errorMessage={errors?.companyWebsite?.message}
            autocapitalize="off"
            {...register('companyWebsite')}
          />
        </div>
        <div
          className={classNames(styles.wrapper__item, {
            [styles.wrapper__item_error]: errors?.businessEmail?.message,
          })}>
          <Input
            label="Business E-mail"
            errorMessage={errors?.businessEmail?.message}
            autocapitalize="off"
            type="email"
            {...register('businessEmail')}
          />
        </div>
        <div
          className={classNames(styles.wrapper__item, {
            [styles.wrapper__item_error]: errors?.jobRole?.id?.message,
          })}>
          <Controller
            name="jobRole"
            control={control}
            render={({field: {onChange, onBlur}}) => (
              <Select
                menuPlacement="top"
                value={getValues('jobRole')}
                errorMessage={errors?.jobRole?.id?.message}
                onSelect={(options) => handleSelect(options, onChange, onBlur)}
                options={JobRoles}
                placeholder="Job role"
              />
            )}
          />
        </div>
        <div
          className={classNames(styles.wrapper__item, {
            [styles.wrapper__item_error]: errors?.employees?.id?.message,
          })}>
          <Controller
            name="employees"
            control={control}
            render={({field: {onChange, onBlur}}) => (
              <Select
                menuPlacement="top"
                value={getValues('employees')}
                errorMessage={errors?.employees?.id?.message}
                onSelect={(options) => handleSelect(options, onChange, onBlur)}
                options={Employees}
                placeholder="Employees"
              />
            )}
          />
        </div>
        <div
          className={classNames(styles.wrapper__item, {
            [styles.wrapper__item_error]: errors?.country?.id?.message,
          })}>
          <Controller
            name="country"
            control={control}
            render={({field: {onChange, onBlur}}) => (
              <Select
                menuPlacement="top"
                value={getValues('country')}
                errorMessage={errors?.country?.id?.message}
                onSelect={(options) => handleSelect(options, onChange, onBlur)}
                options={countries}
                placeholder="Country"
                searchable={true}
              />
            )}
          />
        </div>
        <div
          className={classNames(styles.wrapper__item, {
            [styles.wrapper__item_error]: errors?.phone?.message,
          })}>
          <PhoneInput
            {...register('phone')}
            searchPlaceHolder="Search country"
            errorMessage={errors?.phone?.message}
            label="Phone"
            onChange={(v) => setValue('phone', v)}
            defaultCountry="us"
          />
        </div>
      </div>
      <div className="modal-common__footer">
        <Button
          type="submit"
          size="medium"
          variant="ghost"
          onClick={closeModal}>
          Cancel
        </Button>
        <Button type="submit" size="medium" variant="primary">
          Submit request
        </Button>
      </div>
    </form>
  );
};

export default RequestDemoModal;
