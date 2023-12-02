import phone from '/phone.svg';
import mail from '/mail.svg';
import arrow from '/arrow.svg';
import heart from '/heart.svg';
import checkedHeart from '/darkheart.svg';
import eye from '/Eye Off.svg';
import exit from '/exit.svg';
import back from '/back.svg';
import * as yup from "yup";

export const phoneIcon = phone;
export const mailIcon = mail;
export const arrowIcon = arrow;
export const heartIcon = heart;
export const likedIcon = checkedHeart;
export const eyeIcon = eye;
export const exitIcon = exit;
export const backIcon = back;

export const formSchema = yup.object().shape({
    name: yup.string().required('Поле Имя не может быть пустым')
        .min(2, 'Имя должно быть длинне 2 символов')
        .max(26, 'Имя не должно быть длиннее 26 символов'),
    email: yup.string().email('Поле email должно быть валидной почтой').required('Поле Почта не может быть пустым'),
    password: yup.string().required('Поле Пароль не может быть пустым').min(6, 'Пароль должен быть длиннее 6 символов'),
    confirm: yup.string().required('Это поле не может быть пустым').oneOf([yup.ref('password')], 'Пароли должны совпадать'),
})