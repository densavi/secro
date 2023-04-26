import {Button, Input, TextArea, Typography} from '~/components';

import styles from '../ContactUs.module.scss';
import {useForm} from 'react-hook-form';
import {CONTACT_SCHEMA} from './form';
import client from '~/api/client';
import endpoints from '~/api/endpoints';
import {useState} from 'react';

// TODO: Change to import after fix library https://github.com/react-hook-form/resolvers/issues/271
const {yupResolver} = require('@hookform/resolvers/yup');

const LetsTalk = () => {
  const {
    register,
    handleSubmit,
    formState: {errors, isValid},
    reset,
  } = useForm({
    resolver: yupResolver(CONTACT_SCHEMA),
    mode: 'onBlur',
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      await client.post(endpoints.ContactUsService.sentForm(), values);
      reset();
    } catch (error) {
      // TODO: Add notification after added in design
    }
    setLoading(false);
  };

  return (
    <div className={styles.container__block}>
      <Typography
        variant="Heading"
        type="Large"
        className={styles.container__block_title}>
        LETS TALK
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.container__block_field}>
          <Input
            label="Email"
            placeholder="Enter your e-mail"
            errorMessage={errors && errors.email && errors.email.message}
            {...register('email')}
          />
        </div>
        <div className={styles.container__block_field}>
          <Input
            label="Name"
            placeholder="Enter your name"
            errorMessage={errors && errors.name && errors.name.message}
            {...register('name')}
          />
        </div>
        <div className={styles.container__block_field}>
          <Input
            label="Title"
            placeholder="Enter your title"
            errorMessage={errors && errors.title && errors.title.message}
            {...register('title')}
          />
        </div>
        <div className={styles.container__block_field}>
          <Input
            label="Company"
            placeholder="Enter company name"
            errorMessage={errors && errors.company && errors.company.message}
            {...register('company')}
          />
        </div>

        <div className={styles.container__block_field}>
          <TextArea
            label="Message"
            placeholder="Enter your message"
            errorMessage={errors && errors.message && errors.message.message}
            {...register('message')}
          />
        </div>
        <Button
          type="submit"
          disabled={!isValid || loading}
          className={styles.container__block_send}>
          Send
        </Button>
      </form>
    </div>
  );
};

export default LetsTalk;
