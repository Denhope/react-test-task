import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import React from 'react';

const arrowLeftRightsvg = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="current"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M28.8271 14.72C28.6138 14.5067 24.0138 10.3067 22.6004 9.02667C22.0538 8.53334 21.2138 8.57335 20.7204 9.12002C20.2271 9.66668 20.2671 10.5067 20.8138 11C22.0404 12.12 23.5871 13.5333 24.8271 14.6667H7.25376C8.9071 13.0933 10.8671 11.2133 10.8671 11.2133C11.4004 10.7067 11.4138 9.86667 10.9071 9.33334C10.4004 8.8 9.56041 8.78667 9.02708 9.29334C7.29375 10.9467 3.25375 14.8133 3.16042 14.9067C2.88042 15.1867 2.72044 15.5467 2.68044 15.9334C2.64044 16.4267 2.81378 16.9067 3.18711 17.2667C3.38711 17.4667 7.81377 21.5067 9.17377 22.7333C9.4271 22.96 9.74708 23.08 10.0671 23.08C10.4271 23.08 10.7871 22.9333 11.0538 22.64C11.5471 22.0933 11.5071 21.2533 10.9604 20.76C9.81376 19.72 8.37375 18.4 7.20042 17.3333H24.7604C23.0271 18.9867 20.9071 21.0133 20.9071 21.0133C20.3738 21.52 20.3604 22.36 20.8671 22.8934C21.1338 23.1734 21.4804 23.3067 21.8271 23.3067C22.1604 23.3067 22.4938 23.1867 22.7471 22.9334C24.5471 21.2134 28.7604 17.1867 28.8538 17.0933C29.4271 16.5067 29.5738 15.4667 28.8138 14.72H28.8271Z"
      fill="#676A71"
    />
  </svg>
);
export const ArrowLeftRightIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={arrowLeftRightsvg} {...props} />
);

const arrowLeftsvg = () => (
  <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M28.0003 14.6667H7.02702L14.107 7.6C14.627 7.08 14.627 6.24 14.107 5.72C13.587 5.2 12.747 5.2 12.227 5.72L3.20036 14.72C2.88036 15.04 2.72035 15.4667 2.69368 15.8933C2.69368 15.9333 2.66699 15.96 2.66699 16C2.66699 16.04 2.68035 16.0667 2.69368 16.1067C2.72035 16.5333 2.88036 16.96 3.20036 17.28L12.227 26.28C12.4936 26.5333 12.827 26.6667 13.1737 26.6667C13.5203 26.6667 13.8537 26.5333 14.1204 26.28C14.6404 25.76 14.6404 24.92 14.1204 24.4L7.04036 17.3467H28.0137C28.747 17.3467 29.347 16.7467 29.347 16.0133C29.347 15.28 28.747 14.68 28.0137 14.68L28.0003 14.6667Z"
      fill="#676A71"
    />
  </svg>
);
export const ArrowLeftIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={arrowLeftsvg} {...props} />
);

const bellsvg = () => (
  <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M27.1267 19.8133L26.3667 14.2666C25.7401 9.63994 22.1667 6.05328 17.8201 5.43994V4.01335C17.8201 3.28001 17.2201 2.68001 16.4868 2.68001C15.7534 2.68001 15.1534 3.28001 15.1534 4.01335V5.43994C10.8068 6.06661 7.26007 9.63994 6.62007 14.2666L5.86008 19.8133C5.66008 21.2533 6.08674 22.6933 7.0334 23.76C7.92674 24.7733 9.19342 25.3599 10.5267 25.3599H11.9268C12.2201 27.5866 14.1134 29.32 16.4201 29.32C18.7267 29.32 20.6201 27.5866 20.9134 25.3599H22.4201C23.7534 25.3599 25.0201 24.7733 25.9134 23.76C26.8601 22.68 27.2867 21.24 27.0867 19.8133H27.1267ZM16.4468 26.6667C15.6068 26.6667 14.9134 26.12 14.6601 25.3733H18.2334C17.9801 26.12 17.2868 26.6667 16.4468 26.6667ZM23.9401 22.0133C23.5534 22.4533 23.0201 22.7066 22.4468 22.7066H10.5401C9.96674 22.7066 9.44675 22.4667 9.04675 22.0133C8.62008 21.52 8.42007 20.84 8.5134 20.1733L9.27341 14.6266C9.78008 10.8533 12.8867 8 16.5001 8C20.1134 8 23.2067 10.8533 23.7267 14.6266L24.4867 20.1733C24.5801 20.84 24.3801 21.52 23.9534 22.0133H23.9401Z"
      fill="#676A71"
    />
  </svg>
);
export const BellIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={bellsvg} {...props} />
);

const bookPageDownsvg = () => (
  <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M29.2668 8.68001C29.2001 8.53335 27.4934 5.23991 22.0267 5.23991C18.9867 5.23991 17.1334 6.29323 16.0801 7.22656C15.0001 6.2799 13.1067 5.22656 9.98673 5.22656C4.62673 5.22656 2.93341 8.53335 2.86674 8.68001L2.7334 8.95996V23.9066C2.7334 24.6799 3.10673 25.4 3.7334 25.8534C4.34673 26.2934 5.14677 26.4 5.85343 26.1466C6.82677 25.8 8.34676 25.3866 10.0134 25.3866C12.5601 25.3866 14.7068 26.2534 15.3068 26.52C15.5068 26.6134 15.7201 26.6533 15.9201 26.6533C15.9734 26.6533 16.0134 26.64 16.0667 26.6266C16.1201 26.6266 16.1867 26.6533 16.2401 26.6533C16.4401 26.6533 16.6534 26.6134 16.8534 26.52C17.4401 26.2534 19.5467 25.3999 22.0801 25.3999C23.7867 25.3999 25.3067 25.8 26.2934 26.1466C27.0001 26.3866 27.7867 26.28 28.4001 25.84C29.0267 25.4 29.4001 24.6666 29.4001 23.9066V8.94661L29.2534 8.66667L29.2668 8.68001ZM14.7601 23.4666C13.5468 23.08 11.8934 22.7199 10.0267 22.7199C8.16007 22.7199 6.57341 23.1066 5.41341 23.48V9.66667C5.81341 9.14667 7.08008 7.90658 10.0001 7.90658C13.0667 7.90658 14.3734 9.17335 14.7601 9.68001V23.4666ZM26.7467 23.4933C25.5734 23.12 23.9334 22.7466 22.0934 22.7466C20.2534 22.7466 18.6267 23.1066 17.4401 23.48V9.68001C17.8267 9.16001 19.0801 7.91992 22.0401 7.91992C25.0001 7.91992 26.3601 9.17335 26.7467 9.68001V23.5067V23.4933Z"
      fill="#676A71"
    />
  </svg>
);

export const bookPageDownIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={bookPageDownsvg} {...props} />
);

const boolbsvg = () => (
  <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M26.4535 13.1066C26.4535 7.34661 21.7602 2.65332 16.0002 2.65332C10.2402 2.65332 5.54688 7.34661 5.54688 13.1066C5.54688 16.8266 7.56019 20.2399 10.7335 22.1066L10.7069 24.1066C10.7069 26.9999 13.0535 29.3467 15.9469 29.3467C18.8402 29.3467 21.1869 26.9999 21.1869 24.1066V22.16C24.4002 20.3067 26.4535 16.8666 26.4535 13.1066ZM18.5202 24.1066C18.5202 25.5199 17.3602 26.68 15.9469 26.68C14.5335 26.68 13.3735 25.5199 13.3735 24.1066V22.72H18.5202V24.1066ZM19.5202 20.0533H17.3335V13.3467C17.3335 12.6133 16.7335 12.0133 16.0002 12.0133C15.2669 12.0133 14.6669 12.6133 14.6669 13.3467V20.0533H12.4802C9.88018 18.7333 8.21354 16.0399 8.21354 13.1066C8.21354 8.81327 11.7069 5.31999 16.0002 5.31999C20.2935 5.31999 23.7869 8.81327 23.7869 13.1066C23.7869 16.0399 22.1202 18.7333 19.5202 20.0533Z"
      fill="#676A71"
    />
  </svg>
);

export const BoolbIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={boolbsvg} {...props} />
);

const downloadsvg = () => (
  <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14.7999 23.48C14.9865 23.6666 15.2132 23.7866 15.4532 23.8666C15.6265 23.9466 15.8132 24 16.0132 24C16.2132 24 16.3999 23.9466 16.5599 23.8666C16.7999 23.7866 17.0265 23.6666 17.2132 23.48L24.2132 16.4666C24.7332 15.9466 24.7332 15.1067 24.2132 14.5867C23.6932 14.0667 22.8532 14.0667 22.3332 14.5867L17.3599 19.5867V4.01335C17.3599 3.28001 16.7732 2.68001 16.0265 2.68001C15.2799 2.68001 14.6932 3.28001 14.6932 4.01335V19.5867L9.70652 14.5999C9.18652 14.0799 8.34652 14.0799 7.82652 14.5999C7.30652 15.1199 7.30652 15.96 7.82652 16.48L14.8265 23.4933L14.7999 23.48Z"
      fill="#009CB4"
    />
    <path
      d="M25.333 24C24.5997 24 23.9997 24.6 23.9997 25.3333C23.9997 26.2133 23.1997 26.68 22.453 26.68H9.51967C8.75967 26.68 7.99967 26.2133 7.99967 25.3333C7.99967 24.6 7.39967 24 6.66634 24C5.93301 24 5.33301 24.6 5.33301 25.3333C5.33301 27.5867 7.17301 29.3467 9.51967 29.3467H22.453C24.813 29.3467 26.6663 27.5867 26.6663 25.3333C26.6663 24.6 26.0663 24 25.333 24Z"
      fill="#009CB4"
    />
  </svg>
);

export const DownloadIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={downloadsvg} {...props} />
);

const eyeSlashsvg = () => (
  <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M28.0802 12.64C25.4535 9.49333 21.2402 5.73333 16.0135 5.73333C15.0135 5.73333 13.9868 5.88 12.9735 6.16C12.2668 6.36 11.8535 7.09333 12.0535 7.8C12.2535 8.50666 12.9869 8.92 13.6935 8.72C14.4669 8.50667 15.2535 8.38667 16.0135 8.38667C20.4135 8.38667 24.1735 12.1067 26.0269 14.3333C26.8669 15.3467 26.8802 16.7733 26.0669 17.7867C25.7469 18.1867 25.3869 18.6 24.9869 19.0267C24.4802 19.56 24.5069 20.4133 25.0402 20.9067C25.2935 21.1467 25.6269 21.2667 25.9602 21.2667C26.3202 21.2667 26.6668 21.12 26.9335 20.8533C27.3868 20.3733 27.7869 19.9067 28.1469 19.4667C29.7602 17.48 29.7335 14.6 28.0935 12.6267L28.0802 12.64Z"
      fill="#676A71"
    />
    <path
      d="M10.7335 8.85333C10.6935 8.74667 10.6668 8.64 10.6002 8.53334C10.4268 8.28 10.1868 8.13333 9.93351 8.04L7.61352 5.72C7.09352 5.2 6.24018 5.2 5.73352 5.72C5.21352 6.24 5.21352 7.08 5.73352 7.6L7.36018 9.22666C6.18685 10.1733 5.05352 11.2933 3.94685 12.6C2.28019 14.5733 2.22685 17.36 3.81351 19.3867C5.82685 21.9467 10.0802 26.2533 15.9602 26.2533C18.1868 26.2533 20.3735 25.6133 22.4935 24.4L24.3602 26.28C24.6269 26.5467 24.9602 26.6667 25.3068 26.6667C25.6535 26.6667 25.9868 26.5333 26.2535 26.28C26.7735 25.76 26.7735 24.92 26.2535 24.4L10.7335 8.85333ZM13.4269 15.3333L16.6668 18.5733C16.4535 18.6267 16.2268 18.6667 16.0002 18.6667C14.5335 18.6667 13.3335 17.4667 13.3335 16C13.3335 15.7733 13.3735 15.5467 13.4269 15.3333ZM15.9469 23.6C11.2002 23.6 7.61351 19.9333 5.89351 17.7467C5.09351 16.7333 5.12018 15.32 5.96018 14.3333C7.01351 13.08 8.10684 12.0133 9.22684 11.1467L11.4135 13.3333C10.9335 14.1467 10.6535 15.0533 10.6535 16.0133C10.6535 18.96 13.0402 21.3467 15.9869 21.3467C16.9335 21.3467 17.8535 21.0667 18.6535 20.6L20.5069 22.4667C19.0002 23.2267 17.4668 23.6133 15.9335 23.6133L15.9469 23.6Z"
      fill="#676A71"
    />
  </svg>
);

export const EyeSlashIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={eyeSlashsvg} {...props} />
);

const filtersvg = () => (
  <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2.65295 8.63997C2.63962 7.39997 3.10632 6.2266 3.97298 5.3466C4.82632 4.47993 5.95963 4.01327 7.15963 4.01327H24.973C26.1063 4.01327 27.1596 4.43999 27.9596 5.23999C28.8263 6.10666 29.3196 7.35999 29.3063 8.65332C29.3063 9.97332 28.7196 11.2266 27.733 12.0933L20.8663 18.2C20.5996 18.44 20.3063 19.1333 20.3063 19.7466V24.04C20.3063 24.9334 19.8263 25.7732 19.053 26.2399L18.853 26.3467L15.3596 27.7199C14.9863 27.9199 14.573 28.0267 14.1596 28.0267C13.733 28.0267 13.3063 27.92 12.9063 27.6934C12.093 27.24 11.5997 26.3733 11.5997 25.4399V19.4933C11.5997 19.1867 11.2929 18.5733 10.8129 18.1466L4.13298 11.9733C3.19964 11.1333 2.65298 9.91997 2.63965 8.63997H2.65295ZM17.6796 23.9333L17.6396 19.7332C17.6396 18.5999 18.0929 17.0667 19.1063 16.1867L25.973 10.08C26.3996 9.70666 26.6396 9.18663 26.6396 8.62663C26.6396 8.03996 26.4263 7.47994 26.0663 7.10661C25.853 6.89328 25.5063 6.65332 24.973 6.65332H7.17297C6.67964 6.66665 6.21296 6.86663 5.86629 7.2133C5.50629 7.58663 5.30629 8.06659 5.31962 8.58659V8.62663C5.31962 9.14663 5.55962 9.65333 5.94629 10L12.6263 16.1733C13.3863 16.8667 14.293 18.1467 14.293 19.4933V25.4399"
      fill="#676A71"
    />
  </svg>
);

export const FilterIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={filtersvg} {...props} />
);

const lockClosedIIsvg = () => (
  <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.9995 18.6533C14.9862 18.6533 14.1729 19.4666 14.1729 20.48C14.1729 21.4933 14.9862 22.3066 15.9995 22.3066C17.0128 22.3066 17.8262 21.4933 17.8262 20.48C17.8262 19.4666 17.0128 18.6533 15.9995 18.6533Z"
      fill="#676A71"
    />
    <path
      d="M21.5997 12H21.333V8C21.333 5.05333 18.9463 2.66667 15.9997 2.66667C13.053 2.66667 10.6663 5.05333 10.6663 8V12H10.3997C7.59966 12 5.33301 14.28 5.33301 17.0667V24.2533C5.33301 27.0533 7.61299 29.32 10.3997 29.32H21.5863C24.3863 29.32 26.653 27.04 26.653 24.2533V17.0667C26.653 14.2667 24.373 12 21.5863 12H21.5997ZM13.333 8C13.333 6.53333 14.533 5.33333 15.9997 5.33333C17.4663 5.33333 18.6663 6.53333 18.6663 8V12H13.333V8ZM23.9997 24.2667C23.9997 25.5867 22.9197 26.6667 21.5997 26.6667H10.413C9.093 26.6667 8.01302 25.5867 8.01302 24.2667V17.08C8.01302 15.76 9.093 14.68 10.413 14.68H21.5997C22.9197 14.68 23.9997 15.76 23.9997 17.08V24.2667Z"
      fill="#676A71"
    />
  </svg>
);

export const LockClosedIIIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={lockClosedIIsvg} {...props} />
);

const logoutsvg = () => (
  <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18.6667 20C17.9333 20 17.3333 20.6 17.3333 21.3333V22.6667C17.3333 24.1067 16.4133 25.3333 15.3333 25.3333H8.66667C7.58667 25.3333 6.66667 24.1067 6.66667 22.6667V9.33333C6.66667 7.89333 7.58667 6.66667 8.66667 6.66667H15.3333C16.4133 6.66667 17.3333 7.89333 17.3333 9.33333V10.6667C17.3333 11.4 17.9333 12 18.6667 12C19.4 12 20 11.4 20 10.6667V9.33333C20 6.38667 17.9067 4 15.3333 4H8.66667C6.09333 4 4 6.38667 4 9.33333V22.6667C4 25.6133 6.09333 28 8.66667 28H15.3333C17.9067 28 20 25.6133 20 22.6667V21.3333C20 20.6 19.4 20 18.6667 20Z"
      fill="#676A71"
    />
    <path
      d="M27.9997 16C27.9997 15.8134 27.9597 15.6267 27.8797 15.4667C27.7997 15.2533 27.693 15.0667 27.533 14.9067L23.5197 10.9067C22.9997 10.3867 22.1597 10.3867 21.6397 10.9067C21.1197 11.4267 21.1197 12.2666 21.6397 12.7866L23.5197 14.6533H10.6663C9.93301 14.6533 9.33301 15.2533 9.33301 15.9867C9.33301 16.72 9.93301 17.32 10.6663 17.32H23.5197L21.653 19.1866C21.133 19.7066 21.133 20.5467 21.653 21.0667C21.9197 21.3333 22.253 21.4533 22.5997 21.4533C22.9464 21.4533 23.2797 21.32 23.5463 21.0667L27.5463 17.08C27.7063 16.92 27.8264 16.72 27.893 16.52C27.9597 16.36 28.013 16.1733 28.013 15.9867L27.9997 16Z"
      fill="#676A71"
    />
  </svg>
);

export const LogoutIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={logoutsvg} {...props} />
);

const noteBookmarksvg = () => (
  <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21.3467 4H10.6667C6.98667 4 4 6.98667 4 10.6667V21.3467C4 25.0267 6.98667 28.0133 10.6667 28.0133H21.3467C25.0267 28.0133 28.0133 25.0267 28.0133 21.3467V10.6667C28.0133 6.98667 25.0267 4 21.3467 4ZM15.16 15.96L13.3333 16.8534V6.66667H18.68V16.8534L16.8533 15.96C16.32 15.6933 15.6933 15.6933 15.16 15.96ZM25.3467 21.3333C25.3467 23.5333 23.5467 25.3333 21.3467 25.3333H10.6667C8.46667 25.3333 6.66667 23.5333 6.66667 21.3333V10.6533C6.66667 8.45332 8.45332 6.66665 10.6533 6.65332V18.0533C10.6533 18.7066 10.9867 19.3067 11.5467 19.6667C12.12 20.0267 12.8133 20.0534 13.4133 19.7734L15.9867 18.52L18.56 19.7734C18.8266 19.9067 19.12 19.9733 19.4 19.9733C19.76 19.9733 20.1067 19.88 20.4267 19.68C20.9867 19.3333 21.32 18.7333 21.32 18.0666V6.66667C23.52 6.66667 25.32 8.46667 25.32 10.6667V21.3467L25.3467 21.3333Z"
      fill="#676A71"
    />
  </svg>
);

export const NoteBookmarkIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={noteBookmarksvg} {...props} />
);

const notesCalendarsvg = () => (
  <svg width="1em" height="1em" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_17_37)">
      <path
        d="M22.6667 5.33333V4C22.6667 3.26667 22.0667 2.66667 21.3333 2.66667C20.6 2.66667 20 3.26667 20 4V5.33333H12V4C12 3.26667 11.4 2.66667 10.6667 2.66667C9.93333 2.66667 9.33333 3.26667 9.33333 4V5.33333C6.38667 5.33333 4 7.72 4 10.6667V22.6667C4 25.6133 6.38667 28 9.33333 28H22.6667C25.6133 28 28 25.6133 28 22.6667V10.6667C28 7.72 25.6133 5.33333 22.6667 5.33333ZM25.3333 22.6667C25.3333 24.1333 24.1333 25.3333 22.6667 25.3333H9.33333C7.86667 25.3333 6.66667 24.1333 6.66667 22.6667V10.6667C6.66667 9.2 7.86667 8 9.33333 8V9.33333C9.33333 10.0667 9.93333 10.6667 10.6667 10.6667C11.4 10.6667 12 10.0667 12 9.33333V8H20V9.33333C20 10.0667 20.6 10.6667 21.3333 10.6667C22.0667 10.6667 22.6667 10.0667 22.6667 9.33333V8C24.1333 8 25.3333 9.2 25.3333 10.6667V22.6667Z"
        fill="#676A71"
      />
      <path
        d="M12.9467 15.0667C12.4533 14.5733 11.5467 14.5733 11.0533 15.0667C10.9333 15.1867 10.84 15.3333 10.7733 15.4933C10.7067 15.6667 10.6667 15.84 10.6667 16.0133C10.6667 16.1866 10.7067 16.36 10.7733 16.52C10.84 16.68 10.9333 16.8267 11.0533 16.9467C11.3067 17.2 11.6533 17.3466 12 17.3466C12.1733 17.3466 12.3467 17.3067 12.5067 17.24C12.6667 17.1733 12.8133 17.08 12.9467 16.9467C13.0667 16.8267 13.16 16.68 13.2267 16.52C13.3067 16.36 13.3333 16.1866 13.3333 16.0133C13.3333 15.84 13.3067 15.6667 13.2267 15.4933C13.16 15.3333 13.0667 15.1867 12.9467 15.0667Z"
        fill="#676A71"
      />
      <path
        d="M12.9467 19.0667C12.88 19 12.8133 18.9467 12.7467 18.9067C12.6667 18.8533 12.5867 18.8133 12.5067 18.7733C12.4267 18.7467 12.3467 18.72 12.2667 18.7067C12.0933 18.6667 11.9067 18.6667 11.7467 18.7067C11.6533 18.7067 11.5733 18.7467 11.4933 18.7733C11.4133 18.8133 11.3333 18.8533 11.2667 18.9067C11.1867 18.9467 11.12 19 11.0533 19.0667C10.9333 19.1867 10.84 19.3333 10.7733 19.4933C10.7067 19.6667 10.6667 19.8267 10.6667 20.0133C10.6667 20.3733 10.8133 20.7067 11.0533 20.9467C11.3067 21.2 11.6533 21.3466 12 21.3466C12.3467 21.3466 12.6933 21.2 12.9467 20.9467C13.2 20.7067 13.3333 20.3733 13.3333 20.0133C13.3333 19.8267 13.2933 19.6667 13.2267 19.4933C13.16 19.3333 13.0667 19.1867 12.9467 19.0667Z"
        fill="#676A71"
      />
      <path
        d="M16.9467 15.0667C16.88 15 16.8133 14.9466 16.7467 14.8933C16.6667 14.8533 16.5867 14.8133 16.5067 14.7733C16.4267 14.7467 16.3467 14.72 16.2667 14.7067C16 14.6533 15.7333 14.68 15.4933 14.7733C15.3333 14.84 15.1867 14.9467 15.0533 15.0667C14.9333 15.1867 14.84 15.3333 14.7733 15.4933C14.7067 15.6667 14.6667 15.84 14.6667 16.0133C14.6667 16.1866 14.7067 16.36 14.7733 16.52C14.84 16.68 14.9333 16.8267 15.0533 16.9467C15.1867 17.08 15.3333 17.1733 15.4933 17.24C15.6533 17.3067 15.8267 17.3466 16 17.3466C16.1733 17.3466 16.3467 17.3067 16.5067 17.24C16.6667 17.1733 16.8133 17.08 16.9467 16.9467C17.0667 16.8267 17.16 16.68 17.2267 16.52C17.3067 16.36 17.3333 16.1866 17.3333 16.0133C17.3333 15.84 17.3067 15.6667 17.2267 15.4933C17.16 15.3333 17.0667 15.1867 16.9467 15.0667Z"
        fill="#676A71"
      />
      <path
        d="M16.9467 19.0666C16.8267 18.9466 16.68 18.84 16.5067 18.7733C16.1867 18.64 15.8133 18.64 15.4933 18.7733C15.3333 18.84 15.1867 18.9466 15.0533 19.0666C14.9333 19.1866 14.84 19.3333 14.7733 19.4933C14.7067 19.6666 14.6667 19.8266 14.6667 20.0133C14.6667 20.1866 14.7067 20.36 14.7733 20.52C14.84 20.68 14.9333 20.8266 15.0533 20.9466C15.1867 21.08 15.3333 21.1733 15.4933 21.24C15.6533 21.3066 15.8267 21.3466 16 21.3466C16.36 21.3466 16.6933 21.2 16.9467 20.9466C17.0667 20.8266 17.16 20.68 17.24 20.52C17.3067 20.36 17.3333 20.1866 17.3333 20.0133C17.3333 19.84 17.3067 19.6666 17.2267 19.4933C17.16 19.3333 17.0667 19.1866 16.9467 19.0666Z"
        fill="#676A71"
      />
      <path
        d="M20.9467 15.0666C20.8267 14.9466 20.68 14.84 20.5067 14.7733C20.0133 14.5733 19.4267 14.6933 19.0533 15.0666C18.9333 15.1866 18.84 15.3333 18.7733 15.4933C18.7067 15.6666 18.6667 15.84 18.6667 16.0133C18.6667 16.1866 18.7067 16.36 18.7733 16.52C18.84 16.68 18.9333 16.8266 19.0533 16.9466C19.1867 17.08 19.3333 17.1733 19.4933 17.24C19.6533 17.3066 19.8267 17.3466 20 17.3466C20.1733 17.3466 20.3467 17.3066 20.5067 17.24C20.6667 17.1733 20.8133 17.08 20.9467 16.9466C21.0667 16.8266 21.16 16.68 21.2267 16.52C21.3067 16.36 21.3333 16.1866 21.3333 16.0133C21.3333 15.84 21.3067 15.6666 21.2267 15.4933C21.16 15.3333 21.0667 15.1866 20.9467 15.0666Z"
        fill="#676A71"
      />
      <path
        d="M20.9467 19.0667C20.88 19 20.8133 18.9467 20.7467 18.9067C20.6667 18.8533 20.5867 18.8133 20.5067 18.7733C20.4267 18.7467 20.3467 18.72 20.2667 18.7067C20.0933 18.6667 19.9067 18.6667 19.7467 18.7067C19.6533 18.7067 19.5733 18.7467 19.4933 18.7733C19.4133 18.8133 19.3333 18.8533 19.2667 18.9067C19.1867 18.9467 19.12 19 19.0533 19.0667C18.9333 19.1867 18.84 19.3333 18.7733 19.4933C18.7067 19.6667 18.6667 19.8267 18.6667 20.0133C18.6667 20.3733 18.8133 20.7067 19.0533 20.9467C19.3067 21.2 19.6533 21.3466 20 21.3466C20.3467 21.3466 20.6933 21.2 20.9467 20.9467C21.2 20.7067 21.3333 20.3733 21.3333 20.0133C21.3333 19.8267 21.2933 19.6667 21.2267 19.4933C21.16 19.3333 21.0667 19.1867 20.9467 19.0667Z"
        fill="#676A71"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_17_37"
        x="-4"
        y="0"
        width="40"
        height="40"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_17_37" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_17_37" result="shape" />
      </filter>
    </defs>
  </svg>
);

export const NotesCalendarIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={notesCalendarsvg} {...props} />
);

const papersvg = () => (
  <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M26.8402 11.6133L20.2669 5.03996C19.6002 4.37329 18.6935 4 17.7469 4H11.8936C7.48022 4 3.89355 7.58667 3.89355 12V20C3.89355 24.4133 7.48022 28 11.8936 28H19.8936C24.3069 28 27.8936 24.4133 27.8936 20V14.1466C27.8936 13.2 27.5202 12.2933 26.8536 11.6266L26.8402 11.6133ZM19.5469 8.09334L23.8002 12.3467H21.6802C20.5069 12.3467 19.5469 11.4533 19.5469 10.3467V8.09334ZM19.8802 25.32H11.8802C8.93354 25.32 6.54688 22.9333 6.54688 19.9867V11.9867C6.54688 9.03999 8.93354 6.65332 11.8802 6.65332H16.8669V10.3467C16.8669 12.92 19.0269 15.0133 21.6669 15.0133H25.2002V19.9867C25.2002 22.9333 22.8135 25.32 19.8669 25.32H19.8802Z"
      fill="#676A71"
    />
  </svg>
);

export const PaperIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={papersvg} {...props} />
);

const searchsvg = () => (
  <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M26.4132 24.4667L22.5465 20.6C23.9998 18.7333 24.7865 16.4533 24.7865 14.0533C24.7865 11.1867 23.6665 8.49334 21.6398 6.46667C17.4665 2.28 10.6532 2.28 6.47984 6.46667C2.29318 10.6533 2.29318 17.4533 6.47984 21.6267C8.50651 23.6533 11.1998 24.7733 14.0665 24.7733C16.4932 24.7733 18.7998 23.96 20.6665 22.4933L24.5332 26.36C24.7998 26.6267 25.1332 26.7467 25.4798 26.7467C25.8265 26.7467 26.1598 26.6133 26.4265 26.36C26.9465 25.84 26.9465 25 26.4265 24.48L26.4132 24.4667ZM8.35984 19.7467C5.21318 16.6 5.21318 11.4933 8.35984 8.36C9.93318 6.78667 11.9998 6 14.0532 6C16.1065 6 18.1732 6.78667 19.7465 8.36C21.3198 9.93333 22.1065 11.9067 22.1065 14.0533C22.1065 16.2 21.2665 18.2267 19.7465 19.7467C18.2265 21.2667 16.1998 22.1067 14.0532 22.1067C11.9065 22.1067 9.87984 21.2667 8.35984 19.7467Z"
      fill="#676A71"
    />
  </svg>
);

export const SearchIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={searchsvg} {...props} />
);

const treeDootsVerticalsvg = () => (
  <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.9996 13.8667C14.8262 13.8667 13.8662 14.8267 13.8662 16C13.8662 17.1733 14.8262 18.1333 15.9996 18.1333C17.1729 18.1333 18.1329 17.1733 18.1329 16C18.1329 14.8267 17.1729 13.8667 15.9996 13.8667Z"
      fill="#676A71"
    />
    <path
      d="M15.9996 22.4C14.8262 22.4 13.8662 23.36 13.8662 24.5333C13.8662 25.7067 14.8262 26.6667 15.9996 26.6667C17.1729 26.6667 18.1329 25.7067 18.1329 24.5333C18.1329 23.36 17.1729 22.4 15.9996 22.4Z"
      fill="#676A71"
    />
    <path
      d="M15.9996 9.59998C17.1729 9.59998 18.1329 8.63997 18.1329 7.46663C18.1329 6.2933 17.1729 5.33333 15.9996 5.33333C14.8262 5.33333 13.8662 6.2933 13.8662 7.46663C13.8662 8.63997 14.8262 9.59998 15.9996 9.59998Z"
      fill="#676A71"
    />
  </svg>
);

export const TreeDootsVerticalIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={treeDootsVerticalsvg} {...props} />
);

const upperArrowcalsvg = () => (
  <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.36164 14.191L15.0721 19.6212C15.1959 19.7412 15.3431 19.8365 15.5053 19.9015C15.6675 19.9665 15.8415 20 16.0172 20C16.1929 20 16.3669 19.9665 16.5291 19.9015C16.6914 19.8365 16.8386 19.7412 16.9623 19.6212L22.6063 14.191C22.731 14.072 22.83 13.9303 22.8976 13.7742C22.9652 13.6182 23 13.4508 23 13.2817C23 13.1126 22.9652 12.9453 22.8976 12.7892C22.83 12.6331 22.731 12.4915 22.6063 12.3724C22.3569 12.1339 22.0195 12 21.6678 12C21.3162 12 20.9788 12.1339 20.7294 12.3724L16.0172 16.9061L11.3051 12.3724C11.0571 12.1358 10.7225 12.0024 10.3733 12.001C10.1981 12 10.0244 12.0323 9.86226 12.0961C9.70008 12.1598 9.55257 12.2537 9.42819 12.3724C9.29897 12.4872 9.19467 12.6255 9.12132 12.7792C9.04797 12.933 9.00701 13.0993 9.00082 13.2684C8.99463 13.4375 9.02334 13.6061 9.08527 13.7644C9.14719 13.9228 9.24113 14.0678 9.36164 14.191Z"
      fill="#676A71"
    />
  </svg>
);

export const UpperArrowcalIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={upperArrowcalsvg} {...props} />
);

const userRoundsvg = () => (
  <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.0003 14.6667C19.307 14.6667 22.0003 11.9733 22.0003 8.66667C22.0003 5.36 19.307 2.66667 16.0003 2.66667C12.6937 2.66667 10.0003 5.36 10.0003 8.66667C10.0003 11.9733 12.6937 14.6667 16.0003 14.6667ZM16.0003 5.33333C17.8403 5.33333 19.3337 6.82667 19.3337 8.66667C19.3337 10.5067 17.8403 12 16.0003 12C14.1603 12 12.667 10.5067 12.667 8.66667C12.667 6.82667 14.1603 5.33333 16.0003 5.33333Z"
      fill="#676A71"
    />
    <path
      d="M20.0003 16H12.0003C9.05366 16 6.66699 18.3867 6.66699 21.3333V22.6667C6.66699 25.6133 9.05366 28 12.0003 28H20.0003C22.947 28 25.3337 25.6133 25.3337 22.6667V21.3333C25.3337 18.3867 22.947 16 20.0003 16ZM22.667 22.6667C22.667 24.1333 21.467 25.3333 20.0003 25.3333H12.0003C10.5337 25.3333 9.33366 24.1333 9.33366 22.6667V21.3333C9.33366 19.8667 10.5337 18.6667 12.0003 18.6667H20.0003C21.467 18.6667 22.667 19.8667 22.667 21.3333V22.6667Z"
      fill="#676A71"
    />
  </svg>
);

export const UserRoundIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={userRoundsvg} {...props} />
);
const linesvg = () => (
  <svg width="3" height="48" viewBox="0 0 3 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" width="2" height="48" rx="1" fill="#F4F3F5" />
  </svg>
);

export const LineIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={linesvg} {...props} />
);

const logosvg = () => (
  <svg width="170" height="40" viewBox="0 0 170 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14.9976 23.2929L19.8092 18.5352H31.7618L21.1736 29.2829L14.9976 23.2929Z"
      fill="#009CB4"
    />
    <path d="M0 20.109L6.01134 26.3562L31.7618 0H19.8092L0 20.109Z" fill="#009CB4" />
    <path
      d="M8.97478 29.3424L15.072 35.4399L21.1736 29.2829L14.9976 23.2929L8.97478 29.3424Z"
      fill="#009CB4"
    />
    <path d="M15.072 35.4399L21.1736 29.2829L31.6129 40H19.5931L15.072 35.4399Z" fill="#008094" />
    <path d="M15.072 35.4399L20.757 33.5203L18.8415 31.6355L15.072 35.4399Z" fill="#007A8D" />
    <path
      d="M56.6819 16.7061C56.6819 17.2874 56.5785 17.8687 56.3717 18.45C56.1649 19.0151 55.8865 19.5398 55.5366 20.0242C55.0275 20.7347 54.3595 21.2998 53.5323 21.7196C52.7211 22.1394 51.8541 22.3493 50.9315 22.3493H46.3265V28.2831H43.0815V10.845H50.9315C51.5201 10.845 52.1007 10.9338 52.6733 11.1114C53.246 11.289 53.7789 11.5635 54.272 11.9349C54.7651 12.2901 55.1866 12.7099 55.5366 13.1943C55.9024 13.6949 56.1808 14.2519 56.3717 14.8655C56.5785 15.4629 56.6819 16.0764 56.6819 16.7061ZM52.8642 18.2078C53.2142 17.7234 53.3891 17.2228 53.3891 16.7061C53.3891 15.9634 53.1824 15.3579 52.7688 14.8897C52.5302 14.6152 52.2359 14.3891 51.886 14.2115C51.5519 14.0339 51.2258 13.9451 50.9077 13.9451H46.3265V19.2734H50.9077C51.2417 19.2734 51.5917 19.1765 51.9575 18.9828C52.3234 18.789 52.6256 18.5307 52.8642 18.2078Z"
      fill="#009CB4"
    />
    <path
      d="M61.6284 22.6399C61.7397 23.3988 61.9624 24.0043 62.2965 24.4564C62.551 24.8116 62.885 25.0861 63.2986 25.2799C63.7122 25.4736 64.1576 25.5705 64.6348 25.5705C65.112 25.5705 65.5574 25.4736 65.9709 25.2799C66.3845 25.0861 66.7265 24.8116 66.9969 24.4564C67.0446 24.3918 67.0844 24.3272 67.1162 24.2626C67.148 24.1819 67.1878 24.1092 67.2355 24.0447L70.4567 25.4736C70.2499 25.8288 69.9954 26.1841 69.6931 26.5393C69.0887 27.2174 68.3729 27.7422 67.5457 28.1135C66.7345 28.4688 65.8755 28.6464 64.9688 28.6464C63.903 28.6464 62.9089 28.4688 61.9863 28.1135C61.0637 27.7422 60.3002 27.1932 59.6957 26.4666C58.6459 25.1588 58.1209 23.6572 58.1209 21.9618C58.1209 19.9435 58.6459 18.2966 59.6957 17.021C60.2843 16.3106 61.008 15.7697 61.867 15.3983C62.7418 15.0269 63.6645 14.8412 64.6348 14.8412C65.6051 14.8412 66.5197 15.0269 67.3787 15.3983C68.2536 15.7697 68.9853 16.3106 69.5738 17.021C70.0988 17.6669 70.4885 18.3934 70.743 19.2008C71.0134 20.0081 71.1486 20.8558 71.1486 21.7438C71.1486 21.9537 71.1327 22.2524 71.1009 22.6399H61.6284ZM64.6348 17.9171C64.1576 17.9171 63.7122 18.014 63.2986 18.2078C62.885 18.3854 62.551 18.6599 62.2965 19.0312C62.0738 19.3219 61.8988 19.6771 61.7715 20.0969H67.498C67.3707 19.6932 67.2037 19.338 66.9969 19.0312C66.7265 18.6599 66.3845 18.3854 65.9709 18.2078C65.5733 18.014 65.1279 17.9171 64.6348 17.9171Z"
      fill="#009CB4"
    />
    <path
      d="M76.5708 22.6399C76.6822 23.3988 76.9049 24.0043 77.2389 24.4564C77.4934 24.8116 77.8275 25.0861 78.2411 25.2799C78.6546 25.4736 79.1 25.5705 79.5772 25.5705C80.0544 25.5705 80.4998 25.4736 80.9134 25.2799C81.327 25.0861 81.669 24.8116 81.9394 24.4564C81.9871 24.3918 82.0269 24.3272 82.0587 24.2626C82.0905 24.1819 82.1303 24.1092 82.178 24.0447L85.3991 25.4736C85.1923 25.8288 84.9378 26.1841 84.6356 26.5393C84.0311 27.2174 83.3153 27.7422 82.4882 28.1135C81.6769 28.4688 80.8179 28.6464 79.9113 28.6464C78.8455 28.6464 77.8513 28.4688 76.9287 28.1135C76.0061 27.7422 75.2426 27.1932 74.6382 26.4666C73.5883 25.1588 73.0634 23.6572 73.0634 21.9618C73.0634 19.9435 73.5883 18.2966 74.6382 17.021C75.2267 16.3106 75.9505 15.7697 76.8094 15.3983C77.6843 15.0269 78.6069 14.8412 79.5772 14.8412C80.5475 14.8412 81.4622 15.0269 82.3212 15.3983C83.196 15.7697 83.9277 16.3106 84.5163 17.021C85.0412 17.6669 85.4309 18.3934 85.6854 19.2008C85.9559 20.0081 86.0911 20.8558 86.0911 21.7438C86.0911 21.9537 86.0752 22.2524 86.0433 22.6399H76.5708ZM79.5772 17.9171C79.1 17.9171 78.6546 18.014 78.2411 18.2078C77.8275 18.3854 77.4934 18.6599 77.2389 19.0312C77.0162 19.3219 76.8412 19.6771 76.714 20.0969H82.4405C82.3132 19.6932 82.1462 19.338 81.9394 19.0312C81.669 18.6599 81.327 18.3854 80.9134 18.2078C80.5157 18.014 80.0703 17.9171 79.5772 17.9171Z"
      fill="#009CB4"
    />
    <path
      d="M97.1205 19.4672C97.025 19.2896 96.9375 19.1442 96.858 19.0312C96.6035 18.676 96.2615 18.4015 95.832 18.2078C95.4184 18.014 94.973 17.9171 94.4958 17.9171C94.0186 17.9171 93.5732 18.014 93.1597 18.2078C92.7461 18.4015 92.412 18.676 92.1575 19.0312C91.6962 19.6448 91.4497 20.549 91.4179 21.7438C91.4497 22.9386 91.6962 23.8428 92.1575 24.4564C92.412 24.8116 92.7461 25.0861 93.1597 25.2799C93.5732 25.4575 94.0186 25.5463 94.4958 25.5463C94.9889 25.5463 95.4423 25.4575 95.8559 25.2799C96.2694 25.0861 96.6035 24.8116 96.858 24.4564L97.0966 24.0447L100.151 25.3767C99.8644 25.8611 99.6258 26.2163 99.4349 26.4424C98.8463 27.1528 98.1146 27.7018 97.2398 28.0893C96.3649 28.4768 95.4502 28.6544 94.4958 28.6222C93.5414 28.6544 92.6268 28.4849 91.7519 28.1135C90.8929 27.726 90.1692 27.169 89.5806 26.4424C88.5308 25.1668 88.0058 23.6006 88.0058 21.7438C88.0058 19.9031 88.5308 18.3289 89.5806 17.021C90.1851 16.2944 90.9168 15.7535 91.7758 15.3983C92.6347 15.0269 93.5414 14.8412 94.4958 14.8412C95.4661 14.8412 96.3808 15.0269 97.2398 15.3983C98.1146 15.7697 98.8463 16.3106 99.4349 17.021C99.7371 17.3924 99.9757 17.7637 100.151 18.1351L97.1205 19.4672Z"
      fill="#009CB4"
    />
    <path
      d="M113.275 18.1109H109.052V28.2831H105.807V18.1109H101.584V15.2045H113.275V18.1109Z"
      fill="#009CB4"
    />
    <path
      d="M126.565 16.9241C127.059 17.5538 127.432 18.2885 127.687 19.1281C127.941 19.9516 128.069 20.8235 128.069 21.7438C128.069 23.7137 127.568 25.3202 126.565 26.5635C126.041 27.2255 125.38 27.7422 124.585 28.1135C123.806 28.4688 122.986 28.6464 122.127 28.6464C120.855 28.6464 119.749 28.3557 118.811 27.7745V34.0958H115.542V15.2045H118.405V16.028C118.898 15.6566 119.447 15.366 120.052 15.1561C120.672 14.9462 121.308 14.8412 121.96 14.8412C122.883 14.8412 123.742 15.0189 124.537 15.3741C125.349 15.7293 126.025 16.246 126.565 16.9241ZM123.989 24.5533C124.418 23.9074 124.633 22.9709 124.633 21.7438C124.633 20.5651 124.402 19.6286 123.941 18.9343C123.432 18.1593 122.613 17.7718 121.483 17.7718C120.545 17.7718 119.821 18.0786 119.312 18.6921C119.01 19.0474 118.779 19.4914 118.62 20.0242C118.477 20.5571 118.405 21.1302 118.405 21.7438C118.405 22.3574 118.477 22.9386 118.62 23.4876C118.779 24.0204 119.01 24.4564 119.312 24.7955C119.869 25.409 120.632 25.7158 121.603 25.7158C122.096 25.7158 122.549 25.627 122.963 25.4494C123.392 25.2556 123.734 24.9569 123.989 24.5533Z"
      fill="#009CB4"
    />
    <path
      d="M150.482 28.2831H147.237V14.1389H138.934V28.2831H135.689V10.845H150.482V28.2831Z"
      fill="#009CB4"
    />
    <path
      d="M161.673 28.6464C160.416 28.6464 159.231 28.4042 158.118 27.9198C157.004 27.4192 156.082 26.7088 155.35 25.7885C154.682 24.965 154.181 24.0204 153.847 22.9548C153.513 21.8891 153.346 20.7589 153.346 19.564C153.346 18.3692 153.513 17.239 153.847 16.1733C154.181 15.0915 154.682 14.1389 155.35 13.3154C156.082 12.3789 156.996 11.6766 158.094 11.2083C159.207 10.7239 160.4 10.4817 161.673 10.4817C162.945 10.4817 164.13 10.7239 165.228 11.2083C166.326 11.6927 167.248 12.3951 167.996 13.3154C168.68 14.1712 169.173 15.1157 169.475 16.1491C169.793 17.1825 169.968 18.3208 170 19.564C169.968 20.8235 169.793 21.9699 169.475 23.0032C169.173 24.0204 168.68 24.9489 167.996 25.7885C167.232 26.725 166.294 27.4354 165.18 27.9198C164.083 28.4042 162.914 28.6464 161.673 28.6464ZM161.577 25.5463C162.373 25.5463 163.104 25.401 163.772 25.1103C164.441 24.8197 164.989 24.3837 165.419 23.8025C166.182 22.7691 166.564 21.3563 166.564 19.564C166.564 17.7557 166.182 16.3429 165.419 15.3256C165.005 14.7605 164.472 14.3326 163.82 14.042C163.184 13.7352 162.5 13.5818 161.768 13.5818C160.973 13.5818 160.233 13.7271 159.549 14.0178C158.881 14.3084 158.34 14.7444 157.927 15.3256C157.179 16.2944 156.789 17.7072 156.758 19.564C156.789 21.4047 157.179 22.8175 157.927 23.8025C158.324 24.3676 158.849 24.8035 159.501 25.1103C160.154 25.401 160.846 25.5463 161.577 25.5463Z"
      fill="#009CB4"
    />
  </svg>
);

export const LogoIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={logosvg} {...props} />
);
