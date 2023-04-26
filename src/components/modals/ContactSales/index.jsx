import styles from './ContactSales.module.scss';
import React, {useContext, useState} from 'react';
import {ModalContext} from '~/context';
import {useForm} from 'react-hook-form';
import {CONTACT_SALES_SCHEMA} from './form';
import {
  Button,
  Input,
  TextArea,
  Typography,
  CommonSubmitModal,
} from '~/components';
import {FormattedMessage} from 'react-intl';
import client from '~/api/client';
import endpoints from '~/api/endpoints';
import {toast} from 'react-toastify';

// TODO: Change to import after fix library https://github.com/react-hook-form/resolvers/issues/271
const {yupResolver} = require('@hookform/resolvers/yup');

const ContactSales = () => {
  const {closeModal, openModal} = useContext(ModalContext);
  const {
    register,
    handleSubmit,
    formState: {errors, isValid},
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(CONTACT_SALES_SCHEMA),
    mode: 'onTouched',
  });
  const [loading, setLoading] = useState(false);

  const name = watch('name');

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      await client.post(endpoints.MainService.sendContactSales(), values);
      reset();
      openModal(
        <CommonSubmitModal
          textSubmitButton="Close"
          onSubmit={closeModal}
          title={`Dear ${name}`}
          text="Thanks for your interest in Secro. We confirm we received your request and one member of our team will be in touch shortly."
          hasDeclineButton={false}
        />,
      );
    } catch (error) {
      // TODO: Add notification after added in design
      closeModal();
      toast.error(<FormattedMessage id="common.errors.default" />);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="modal-common">
      <span className="modal-common-close" onClick={closeModal}>
        &#10005;
      </span>
      <div>
        <Typography
          type="Extra"
          variant="Heading"
          className={styles.wrapper__title}>
          <FormattedMessage id="contactSales.title" />
        </Typography>
        <Typography className={styles.wrapper__description}>
          <FormattedMessage id="contactSales.description" />
        </Typography>
        <div className={styles.wrapper__item}>
          <Input
            label="Name"
            placeholder="Enter your name"
            errorMessage={errors && errors.name && errors.name.message}
            {...register('name')}
          />
        </div>
        <div className={styles.wrapper__item}>
          <Input
            label="Title"
            placeholder="Enter your title"
            errorMessage={errors && errors.title && errors.title.message}
            {...register('title')}
          />
        </div>
        <div className={styles.wrapper__item}>
          <Input
            label="Email"
            placeholder="Enter your e-mail"
            errorMessage={errors && errors.email && errors.email.message}
            {...register('email')}
          />
        </div>
        <div className={styles.wrapper__item}>
          <Input
            label="Company"
            placeholder="Enter company name"
            errorMessage={errors && errors.company && errors.company.message}
            {...register('company')}
          />
        </div>
        <div className={styles.wrapper__item}>
          <TextArea
            label="Message"
            placeholder="Enter your message"
            errorMessage={errors && errors.message && errors.message.message}
            {...register('message')}
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
        <Button
          disabled={!isValid || loading}
          type="submit"
          size="medium"
          variant="primary">
          Send
        </Button>
      </div>
    </form>
  );
};

export default ContactSales;
