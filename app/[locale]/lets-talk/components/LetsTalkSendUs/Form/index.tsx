'use client';

import { Controller, useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { Checkbox } from '@base-ui/react/checkbox';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';
import { contactFormId } from '@/data/contact';
import { cn } from 'cn';
import Description from '@/components/Description';
import ArrowRight from '@/components/Icons/ArrowRight';

const fieldClassName = cn(
  'w-full rounded-2xl bg-light-gray px-2 py-2.5 text-xs text-blue leading-none',
  'placeholder:text-blue-gray outline-none',
  'focus:ring-2 focus:ring-blue/20'
);

type FormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  privacy: boolean;
};

export default function LetsTalkSendUsForm() {
  const t = useTranslations('LetsTalkSendUs');
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
      privacy: false,
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
  }

  return (
    <form
      id={contactFormId}
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-full flex-col justify-between gap-6"
    >
      <div className="flex flex-col gap-4">
        <label className="block">
          <Description className="mb-1 w-max relative">
            {t('nameLabel')}
          </Description>
          <input
            type="text"
            autoComplete="name"
            placeholder={t('namePlaceholder')}
            className={fieldClassName}
            {...register('name', {
              required: t('namePlaceholder'),
            })}
          />
          {errors.name && (
            <Description variant="error" size="xs" className="mt-1">
              {errors.name.message}
            </Description>
          )}
        </label>

        <label className="block">
          <Description className="mb-1 w-max relative">
            {t('companyLabel')}
          </Description>
          <input
            type="text"
            autoComplete="organization"
            placeholder={t('companyPlaceholder')}
            className={fieldClassName}
            {...register('company', {
              required: t('companyPlaceholder'),
            })}
          />
          {errors.company && (
            <Description variant="error" size="xs" className="mt-1">
              {errors.company.message}
            </Description>
          )}
        </label>

        <label className="block">
          <Description className="mb-1 w-max relative">
            {t('emailLabel')}
          </Description>
          <input
            type="email"
            autoComplete="email"
            placeholder={t('emailPlaceholder')}
            className={fieldClassName}
            {...register('email', {
              required: t('emailPlaceholder'),
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: t('emailPlaceholder'),
              },
            })}
          />
          {errors.email && (
            <Description variant="error" size="xs" className="mt-1">
              {errors.email.message}
            </Description>
          )}
        </label>

        <label className="block">
          <Description className="mb-1 w-max relative">
            {t('phoneLabel')}
          </Description>
          <input
            type="tel"
            autoComplete="tel"
            placeholder={t('phonePlaceholder')}
            className={fieldClassName}
            {...register('phone')}
          />
        </label>

        <label className="block">
          <Description className="mb-1 w-max relative">
            {t('messageLabel')}
          </Description>
          <textarea
            placeholder={t('messagePlaceholder')}
            className={cn(fieldClassName, 'resize-none h-8.25')}
            {...register('message', {
              required: t('messagePlaceholder'),
            })}
          />
          {errors.message && (
            <Description variant="error" size="xs" className="mt-1">
              {errors.message.message}
            </Description>
          )}
        </label>
      </div>

      <div className="flex flex-col gap-8">
        <div>
          <label className="flex items-center gap-2 text-xs leading-[110%] text-blue-gray-dark">
            <Controller
              name="privacy"
              control={control}
              rules={{ required: t('consentError') }}
              render={({ field }) => (
                <Checkbox.Root
                  name={field.name}
                  checked={field.value}
                  required
                  className="flex size-6 shrink-0 items-center justify-center border border-[#929EBE] rounded-sm bg-light-gray"
                  onCheckedChange={(checked) => field.onChange(checked)}
                  onBlur={field.onBlur}
                  inputRef={field.ref}
                >
                  <Checkbox.Indicator className="size-4 bg-[#929EBE] rounded-[inherit]" />
                </Checkbox.Root>
              )}
            />
            <span>
              {t.rich('consent', {
                privacy: (chunks) => (
                  <Link
                    href="/privacy-policy"
                    className="inline underline underline-offset-2"
                  >
                    {chunks}
                  </Link>
                ),
              })}
            </span>
          </label>
          {errors.privacy && (
            <Description variant="error" size="xs" className="mt-1">
              {errors.privacy.message}
            </Description>
          )}
        </div>

        <Button type="submit" className="w-full" size="48">
          {t('submit')}
          <ArrowRight color="currentColor" />
        </Button>
      </div>
    </form>
  );
}
