<template>
    <div class="flex flex-col my-10 gap-7">
        <div class="w-full py-6 xl:py-8 px-6 md:px-12 xl:px-[90px] bg-gradient-to-r from-[#B98CF2] to-[#48BBDE] rounded-[25px]">
            <p class="NeutralFace text-2xl md:text-3xl xl:text-[32px] leading-[151.8%] uppercase text-white">Отели москвы</p>
        </div>
        <div class="flex items-center gap-5 text-base font-light px-6 md:px-12 xl:px-[90px] max-md:hidden">
            <NuxtLink to="/">Главная</NuxtLink>
            <img src="/images/icons/breadcrumbs.svg" alt="">
            <NuxtLink to="/">Россия</NuxtLink>
            <img src="/images/icons/breadcrumbs.svg" alt="">
            <NuxtLink to="/">Москва</NuxtLink>
            <img src="/images/icons/breadcrumbs.svg" alt="">
            <NuxtLink to="/">Отель “Астро Плаза”</NuxtLink>
        </div>
        <div class="flex max-md:flex-col md:items-center gap-5 mt-3 px-6 md:px-12 xl:px-[90px]">
            <!-- <p class="leading-[135.3%] font-light text-2xl md:text-3xl xl:text-4xl">{{ apartment[0].country }}, {{ apartment[0].city }}, {{ apartment[0].address }}</p> -->
            <div class="flex items-center gap-3">
                <div class="bg-gradient-to-r from-[#B98CF2] to-[#48BBDE] p-[1px] rounded-[5px]">
                    <div class="relative py-2 pl-4 pr-20 font-light leading-[135.3%] rounded-[5px] bg-[#D9D9D9] w-full h-full">
                        <p class="text-sm">Превосходно</p>
                        <p class="text-base text-white py-1.5 px-4 absolute top-1/2 -translate-y-1/2 right-0 bg-gradient-to-r from-[#B98CF2] to-[#48BBDE] rounded-[5px]">8.8</p>
                    </div>
                </div>
                <p class="text-[10px] text-[#696969]">256 отзывов</p>
            </div>
        </div>
        <div class="flex lg:items-start max-lg:flex-col gap-5 px-6 md:px-12 xl:px-[90px]">
            <div class="flex flex-col gap-8 xl:gap-10 w-full lg:w-[60%]">
                <div class="flex flex-col gap-4 xl:gap-5">
                    <div class="flex flex-col gap-4">
                        <img v-for="img in apartment[0].image" :src="`${config.public.APIbaseURL}/${img.path}`" alt="" class="w-full max-w-max object-cover aspect-video rounded-[25px]">
                    </div>
                    <div class="flex items-center gap-5">
                        <div class="flex items-center gap-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                            <g clip-path="url(#clip0_876_1091)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1 9.02268C1 14.6538 6.94213 24.3276 10.8496 24.3276C14.7571 24.3276 20.6992 14.6538 20.6992 9.02268C20.6992 3.49002 16.2922 -1 10.8496 -1C5.407 -1 1 3.49002 1 9.02268ZM19.2921 9.02268C19.2921 13.9756 13.7989 22.9205 10.8496 22.9205C7.90036 22.9205 2.40709 13.9756 2.40709 9.02268C2.40709 4.26251 6.18934 0.407087 10.8496 0.407087C15.5099 0.407087 19.2921 4.26251 19.2921 9.02268Z" fill="white"/>
                                <path d="M19.2921 9.02268C19.2921 13.9756 13.7989 22.9205 10.8496 22.9205C7.90036 22.9205 2.40709 13.9756 2.40709 9.02268C2.40709 4.26251 6.18934 0.407087 10.8496 0.407087C15.5099 0.407087 19.2921 4.26251 19.2921 9.02268Z" fill="url(#paint0_linear_876_1091)"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8502 13.0709C11.9697 13.0709 13.0434 12.6261 13.8351 11.8345C14.6267 11.0429 15.0714 9.96917 15.0714 8.84962C15.0714 7.73007 14.6267 6.65638 13.8351 5.86474C13.0434 5.0731 11.9697 4.62836 10.8502 4.62836C9.73062 4.62836 8.65692 5.0731 7.86529 5.86474C7.07365 6.65638 6.62891 7.73007 6.62891 8.84962C6.62891 9.96917 7.07365 11.0429 7.86529 11.8345C8.65692 12.6261 9.73062 13.0709 10.8502 13.0709ZM10.8502 6.03544C11.5965 6.03544 12.3123 6.33194 12.8401 6.8597C13.3678 7.38746 13.6643 8.10325 13.6643 8.84962C13.6643 9.59598 13.3678 10.3118 12.8401 10.8395C12.3123 11.3673 11.5965 11.6638 10.8502 11.6638C10.1038 11.6638 9.38801 11.3673 8.86025 10.8395C8.33249 10.3118 8.03599 9.59598 8.03599 8.84962C8.03599 8.10325 8.33249 7.38746 8.86025 6.8597C9.38801 6.33194 10.1038 6.03544 10.8502 6.03544Z" fill="white"/>
                                <path d="M10.8502 6.03544C11.5965 6.03544 12.3123 6.33194 12.8401 6.8597C13.3678 7.38746 13.6643 8.10325 13.6643 8.84962C13.6643 9.59598 13.3678 10.3118 12.8401 10.8395C12.3123 11.3673 11.5965 11.6638 10.8502 11.6638C10.1038 11.6638 9.38801 11.3673 8.86025 10.8395C8.33249 10.3118 8.03599 9.59598 8.03599 8.84962C8.03599 8.10325 8.33249 7.38746 8.86025 6.8597C9.38801 6.33194 10.1038 6.03544 10.8502 6.03544Z" fill="white"/>
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_876_1091" x1="1.64437" y1="-1" x2="20.9706" y2="-0.153075" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#B98CF2"/>
                                    <stop offset="1" stop-color="#48BBDE"/>
                                </linearGradient>
                                <clipPath id="clip0_876_1091">
                                    <rect width="22" height="23" fill="white"/>
                                </clipPath>
                            </defs>
                            </svg>
                            <p class="leading-[165.3%] font-light text-base md:text-lg xl:text-xl">{{ apartment[0].country }}, {{ apartment[0].city }}, {{ apartment[0].address }}</p>
                        </div>
                        <NuxtLink to="/" class="text-[10px] text-[#696969] underline">Показать на карте</NuxtLink>
                    </div>
                    <div class="rounded-[20px] bg-white shadow-[1px_1px_20px_0px_rgba(0,0,0,0.15)] p-7 flex flex-col gap-7 text-[#181818]">
                        <div class="flex items-center gap-5">
                            <p class="leading-[135.3%] font-light text-lg md:text-xl xl:text-2xl">Номер стандарт</p>
                            <div class="flex items-center gap-5 py-1 px-5 rounded-[5px] bg-gradient-to-r from-[#B98CF2] to-[#48BBDE] text-white font-light">
                                <p>ТОП</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                    <path d="M4.35355 0.646446C4.15829 0.451185 3.84171 0.451185 3.64645 0.646446L0.464467 3.82843C0.269204 4.02369 0.269204 4.34027 0.464467 4.53553C0.659729 4.7308 0.976311 4.7308 1.17157 4.53553L4 1.70711L6.82843 4.53553C7.02369 4.7308 7.34027 4.7308 7.53553 4.53553C7.7308 4.34027 7.7308 4.02369 7.53553 3.82843L4.35355 0.646446ZM4.5 17L4.5 1L3.5 1L3.5 17L4.5 17Z" fill="white"/>
                                </svg>
                            </div>
                        </div>
                        <div class="flex items-center gap-2.5 flex-wrap">
                            <p class="py-1 px-7 rounded-full border border-[#3E3E3E]">35 м2</p>
                            <p class="py-1 px-7 rounded-full border border-[#3E3E3E]">1 кровать</p>
                            <p class="py-1 px-7 rounded-full border border-[#3E3E3E]">1 спальня</p>
                            <p class="py-1 px-7 rounded-full border border-[#3E3E3E]">Есть лифт</p>
                            <div class="flex items-center gap-2.5 py-1 px-7 rounded-full border border-[#3E3E3E]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="23" viewBox="0 0 25 23" fill="none">
                                <g clip-path="url(#clip0_877_1190)">
                                    <path d="M1.62516 7.98506V7.96875C1.62514 6.35754 2.10232 4.78242 2.9965 3.44211C3.89068 2.10181 5.16179 1.05636 6.64948 0.437667C8.13717 -0.181022 9.77477 -0.345234 11.3557 -0.0342494C12.9366 0.276735 14.39 1.04898 15.5325 2.18506C16.4314 1.74138 17.4355 1.55484 18.4338 1.64604C19.4321 1.73724 20.3857 2.10263 21.1894 2.70185C21.993 3.30107 22.6154 4.11078 22.9877 5.04153C23.36 5.97229 23.4677 6.98784 23.299 7.976C23.5471 7.99902 23.7877 8.07291 24.0058 8.19306C24.224 8.31321 24.4151 8.47704 24.5672 8.67433C24.7192 8.87161 24.829 9.09812 24.8896 9.33972C24.9502 9.58131 24.9603 9.8328 24.9194 10.0785C24.1002 15.0067 22.0738 18.126 18.8439 19.4382V20.6562C18.8439 21.3773 18.5575 22.0688 18.0476 22.5787C17.5377 23.0886 16.8462 23.375 16.1252 23.375H8.87516C8.1541 23.375 7.46258 23.0886 6.95271 22.5787C6.44285 22.0688 6.15641 21.3773 6.15641 20.6562V19.4382C2.92654 18.126 0.900161 15.0067 0.0809112 10.0785C0.0413729 9.83933 0.0502138 9.59466 0.106911 9.35896C0.163608 9.12327 0.267009 8.90135 0.410994 8.70633C0.554979 8.5113 0.736623 8.34715 0.945176 8.22357C1.15373 8.09999 1.38495 8.01951 1.62516 7.98687V7.98506ZM3.43766 7.96875H5.25016C5.25016 6.76699 5.72756 5.61445 6.57733 4.76467C7.42711 3.9149 8.57965 3.4375 9.78141 3.4375C10.9832 3.4375 12.1357 3.9149 12.9855 4.76467C13.8353 5.61445 14.3127 6.76699 14.3127 7.96875H16.1252C16.1252 6.28628 15.4568 4.67272 14.2671 3.48304C13.0774 2.29336 11.4639 1.625 9.78141 1.625C8.09894 1.625 6.48539 2.29336 5.2957 3.48304C4.10602 4.67272 3.43766 6.28628 3.43766 7.96875ZM7.06266 7.96875H12.5002C12.5002 7.24769 12.2137 6.55617 11.7039 6.0463C11.194 5.53644 10.5025 5.25 9.78141 5.25C9.06035 5.25 8.36883 5.53644 7.85896 6.0463C7.3491 6.55617 7.06266 7.24769 7.06266 7.96875ZM19.5073 7.96875H21.4485C21.5853 7.4331 21.5981 6.87329 21.4858 6.33197C21.3735 5.79065 21.1391 5.2821 20.8005 4.84508C20.4619 4.40806 20.028 4.0541 19.5319 3.81017C19.0358 3.56624 18.4905 3.43878 17.9377 3.4375C17.5027 3.4375 17.0894 3.51362 16.7052 3.65319C17.026 4.16794 17.2906 4.72256 17.4936 5.30437C17.8388 5.21875 18.2016 5.23638 18.5369 5.35508C18.8722 5.47377 19.1652 5.68831 19.3797 5.97206C19.5941 6.25581 19.7205 6.59629 19.7432 6.95125C19.7659 7.3062 19.6839 7.66 19.5073 7.96875ZM17.0314 19.75H7.96891V20.6562C7.96891 20.8966 8.06439 21.1271 8.23435 21.2971C8.4043 21.467 8.63481 21.5625 8.87516 21.5625H16.1252C16.3655 21.5625 16.596 21.467 16.766 21.2971C16.9359 21.1271 17.0314 20.8966 17.0314 20.6562V19.75ZM7.33091 17.9375H17.6694C20.544 17.0131 22.3638 14.3995 23.1323 9.78125H1.86804C2.63654 14.3995 4.45629 17.0131 7.33091 17.9375Z" fill="url(#paint0_linear_877_1190)"/>
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_877_1190" x1="0.870714" y1="-0.187624" x2="25.2474" y2="1.26307" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#B98CF2"/>
                                        <stop offset="1" stop-color="#48BBDE"/>
                                    </linearGradient>
                                    <clipPath id="clip0_877_1190">
                                        <rect width="25" height="23" fill="white"/>
                                    </clipPath>
                                </defs>
                                </svg>
                                <p>Завтрак включен</p>
                            </div>
                        </div>
                    </div>
                    <div class="rounded-[20px] bg-white shadow-[1px_1px_20px_0px_rgba(0,0,0,0.15)] p-7 flex flex-col gap-2.5 text-[#181818]">
                        <p class="leading-[135.3%] font-light text-lg md:text-xl xl:text-2xl">Об отеле</p>
                        <div class="flex items-start gap-4 justify-between">
                            <div class="flex flex-col gap-5 w-1/2">
                                <div class="flex items-center gap-[65px]">
                                    <div class="flex flex-col gap-1">
                                        <p class="text-base md:text-lg xl:text-xl font-normal">Заезд</p>
                                        <p class="text-base leading-[135.3%]">После 14:00</p>
                                    </div>
                                    <div class="flex flex-col gap-1">
                                        <p class="text-base md:text-lg xl:text-xl font-normal">Выезд</p>
                                        <p class="text-base leading-[135.3%]">До 12:00</p>
                                    </div>
                                </div>
                                <div class="flex flex-col gap-2.5 text-base">
                                    <p class="text-base md:text-lg xl:text-xl font-normal">Удобства</p>
                                    <div class="flex items-center gap-2.5">
                                        <img src="/images/icons/apart1.svg" alt="">
                                        <p>Фен</p>
                                    </div>
                                    <div class="flex items-center gap-2.5">
                                        <img src="/images/icons/apart2.svg" alt="">
                                        <p>Кондиционер</p>
                                    </div>
                                    <div class="flex items-center gap-2.5">
                                        <img src="/images/icons/apart3.svg" alt="">
                                        <p>Телевизор</p>
                                    </div>
                                    <div class="flex items-center gap-2.5">
                                        <img src="/images/icons/apart4.svg" alt="">
                                        <p>Микроволновка</p>
                                    </div>
                                </div>
                                <button class="w-fit text-base relative after:absolute after:w-full after:h-px after:rounded-full after:bg-gradient-to-r after:from-[#B98CF2] after:to-[#48BBDE] after:left-0 after:bottom-0">Развернуть</button>
                            </div>
                        </div>
                    </div>
                    <div class="rounded-[20px] bg-white shadow-[1px_1px_20px_0px_rgba(0,0,0,0.15)] p-7 flex flex-col gap-2.5 text-[#181818]">
                        <p class="leading-[135.3%] font-light text-lg md:text-xl xl:text-2xl">Места рядом</p>
                        <div class="w-full gap-10 flex max-md:flex-col md:items-start text-base text-center">
                            <div class="flex flex-col gap-2.5 items-center md:justify-between md:h-full">
                                <p class="leading-[135.3%]">Аэропорт</p>
                                <p class="py-0.5 px-1 rounded-[5px] bg-gradient-to-r from-[#B98CF2] to-[#48BBDE] text-white">20 км</p>
                            </div>
                            <div class="flex flex-col gap-2.5 items-center md:justify-between md:h-full">
                                <p class="leading-[135.3%]">Автобусная остановка</p>
                                <p class="py-0.5 px-1 rounded-[5px] bg-gradient-to-r from-[#B98CF2] to-[#48BBDE] text-white">50 м</p>
                            </div>
                            <div class="flex flex-col gap-2.5 items-center md:justify-between md:h-full">
                                <p class="leading-[135.3%]">м. Черкизовская</p>
                                <p class="py-0.5 px-1 rounded-[5px] bg-gradient-to-r from-[#B98CF2] to-[#48BBDE] text-white">50 м</p>
                            </div>
                            <div class="flex flex-col gap-2.5 items-center md:justify-between md:h-full">
                                <p class="leading-[135.3%]">м. Черкизовская</p>
                                <p class="py-0.5 px-1 rounded-[5px] bg-gradient-to-r from-[#B98CF2] to-[#48BBDE] text-white">50 м</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-6">
                    <p class="leading-[135.3%] font-light text-lg md:text-xl xl:text-2xl lg:pl-7">Расположение</p>
                    <ClientOnly>
                        <div class="w-full bg-gradient-to-r from-[#B98CF2] to-[#48BBDE] p-[1px] rounded-[25px]">
                            <div class="w-full h-full rounded-[25px] bg-white overflow-hidden">
                                <YandexMap :coordinates="[apartment[0].location.lat, apartment[0].location.long]" :zoom="17">
                                    <YandexMarker :coordinates="[apartment[0].location.lat, apartment[0].location.long]" :marker-id="666">
                                        <template #component>
                                            <div class="flex flex-col h-fit gap-2">
                                                <p class="font-medium text-lg">{{ apartment[0].city }}</p>
                                                <p>{{ apartment[0].address }}</p>
                                            </div>
                                        </template>
                                    </YandexMarker>
                                </YandexMap>
                            </div>
                        </div>
                    </ClientOnly>
                </div>
                <div class="rounded-[20px] bg-white shadow-[1px_1px_20px_0px_rgba(0,0,0,0.15)] p-7 flex flex-col gap-7 text-[#181818]">
                    <div class="flex max-md:flex-col md:items-center md:justify-between gap-4">
                        <p class="leading-[135.3%] font-light text-2xl md:text-3xl xl:text-4xl">Отзывы</p>
                        <div class="flex items-center gap-3">
                            <div class="bg-gradient-to-r from-[#B98CF2] to-[#48BBDE] p-[1px] rounded-[5px]">
                                <div class="relative py-2 pl-4 pr-20 font-light leading-[135.3%] rounded-[5px] bg-[#D9D9D9] w-full h-full">
                                    <p class="text-sm">Превосходно</p>
                                    <p class="text-base text-white py-1.5 px-4 absolute top-1/2 -translate-y-1/2 right-0 bg-gradient-to-r from-[#B98CF2] to-[#48BBDE] rounded-[5px]">8.8</p>
                                </div>
                            </div>
                            <p class="text-[10px] text-[#696969]">256 отзывов</p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-5">
                        <div class="flex flex-col gap-4 text-base">
                            <div class="flex items-center gap-4">
                                <p class="font-medium">Алексей</p>
                                <p class="text-base text-white py-0.5 px-4 bg-gradient-to-r from-[#B98CF2] to-[#48BBDE] rounded-[5px]">8.8</p>
                                <p class="text-xs font-light">Превосходно</p>
                            </div>
                            <div class="flex flex-col gap-2.5">
                                <p class="font-medium leading-[135.3%]">Что хорошего в отеле</p>
                                <p class="leading-[135.3%]">Рядом Красная площадь, быстрым шагом 8 минут. Все в доступности. Номера убирались качественно и вовремя. Удобные номера, есть в наличии двухкомнатные-очень удобно для командировок.</p>
                            </div>
                            <div class="flex flex-col gap-2.5">
                                <p class="font-medium leading-[135.3%]">Что не понравилось</p>
                                <p class="leading-[135.3%]">Очень скудный и бедный завтрак. Не всегда вовремя подходили официанты.</p>
                            </div>
                        </div>
                        <div class="w-full h-px bg-[#E1E1E1]"></div>
                    </div>
                    <div class="flex flex-col gap-5">
                        <div class="flex flex-col gap-4 text-base">
                            <div class="flex items-center gap-4">
                                <p class="font-medium">Алексей</p>
                                <p class="text-base text-white py-0.5 px-4 bg-gradient-to-r from-[#B98CF2] to-[#48BBDE] rounded-[5px]">8.8</p>
                                <p class="text-xs font-light">Превосходно</p>
                            </div>
                            <div class="flex flex-col gap-2.5">
                                <p class="font-medium leading-[135.3%]">Что хорошего в отеле</p>
                                <p class="leading-[135.3%]">Рядом Красная площадь, быстрым шагом 8 минут. Все в доступности. Номера убирались качественно и вовремя. Удобные номера, есть в наличии двухкомнатные-очень удобно для командировок.</p>
                            </div>
                            <div class="flex flex-col gap-2.5">
                                <p class="font-medium leading-[135.3%]">Что не понравилось</p>
                                <p class="leading-[135.3%]">Очень скудный и бедный завтрак. Не всегда вовремя подходили официанты.</p>
                            </div>
                        </div>
                    </div>
                    <button class="py-3 px-[60px] text-white rounded-[10px] bg-gradient-to-r from-[#B98CF2] to-[#48BBDE] text-center w-fit text-base md:text-lg xl:text-xl leading-[135.3%]">Показать еще</button>
                </div>
            </div>
            <div class="flex flex-col gap-5 w-full lg:w-[40%]">
                <div class="flex items-center gap-4 md:gap-6 xl:gap-8 lg:self-end w-fit">
                    <button class="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                            <circle cx="17" cy="17" r="17" fill="url(#paint0_linear_877_1132)"/>
                            <path d="M21.0898 24C20.5596 24 20.1081 23.8207 19.7355 23.4621C19.3628 23.1045 19.1765 22.6698 19.1765 22.1579C19.1765 22.0596 19.1854 21.9582 19.2032 21.8536C19.2206 21.7485 19.2468 21.6497 19.282 21.5574L13.3616 18.1959C13.1745 18.3993 12.9569 18.5577 12.7086 18.6712C12.4608 18.7851 12.1952 18.8421 11.9118 18.8421C11.3805 18.8421 10.9294 18.6631 10.5582 18.3049C10.1861 17.9473 10 17.5128 10 17.0015C10 16.4906 10.1861 16.0556 10.5582 15.6965C10.9289 15.3374 11.38 15.1579 11.9118 15.1579C12.1952 15.1579 12.4608 15.2149 12.7086 15.3288C12.9569 15.4423 13.1745 15.6007 13.3616 15.8041L19.282 12.4426C19.2468 12.3503 19.2206 12.2515 19.2032 12.1464C19.1854 12.0418 19.1765 11.9404 19.1765 11.8421C19.1765 11.3302 19.3623 10.8955 19.7339 10.5379C20.1051 10.1793 20.556 10 21.0867 10C21.6169 10 22.0683 10.1791 22.441 10.5372C22.8137 10.8948 23 11.3293 23 11.8406C23 12.3515 22.8139 12.7865 22.4418 13.1456C22.0706 13.5047 21.6195 13.6842 21.0882 13.6842C20.8048 13.6842 20.5392 13.6272 20.2914 13.5133C20.0431 13.3998 19.8255 13.2414 19.6384 13.038L13.718 16.3995C13.7532 16.4918 13.7794 16.5901 13.7968 16.6942C13.8146 16.7988 13.8235 16.8998 13.8235 16.9971C13.8235 17.0943 13.8146 17.1962 13.7968 17.3028C13.7794 17.4089 13.7532 17.5082 13.718 17.6005L19.6384 20.962C19.8255 20.7586 20.0431 20.6002 20.2914 20.4867C20.5392 20.3728 20.8048 20.3158 21.0882 20.3158C21.6195 20.3158 22.0706 20.4948 22.4418 20.8529C22.8139 21.2106 23 21.6451 23 22.1564C23 22.6673 22.8142 23.1023 22.4425 23.4614C22.0714 23.8205 21.6205 24 21.0898 24ZM21.0882 12.9474C21.4028 12.9474 21.6727 12.8391 21.8981 12.6224C22.1229 12.4053 22.2353 12.1452 22.2353 11.8421C22.2353 11.539 22.1229 11.2789 21.8981 11.0618C21.6727 10.8452 21.4028 10.7368 21.0882 10.7368C20.7737 10.7368 20.5037 10.8452 20.2784 11.0618C20.0536 11.2789 19.9412 11.539 19.9412 11.8421C19.9412 12.1452 20.0536 12.4053 20.2784 12.6224C20.5037 12.8391 20.7737 12.9474 21.0882 12.9474ZM11.9118 18.1053C12.2263 18.1053 12.4963 17.9969 12.7216 17.7803C12.9464 17.5632 13.0588 17.3031 13.0588 17C13.0588 16.6969 12.9464 16.4368 12.7216 16.2197C12.4963 16.0031 12.2263 15.8947 11.9118 15.8947C11.5972 15.8947 11.3273 16.0031 11.1019 16.2197C10.8771 16.4368 10.7647 16.6969 10.7647 17C10.7647 17.3031 10.8771 17.5632 11.1019 17.7803C11.3273 17.9969 11.5972 18.1053 11.9118 18.1053ZM21.0882 23.2632C21.4028 23.2632 21.6727 23.1548 21.8981 22.9382C22.1229 22.7211 22.2353 22.461 22.2353 22.1579C22.2353 21.8548 22.1229 21.5947 21.8981 21.3776C21.6727 21.1609 21.4028 21.0526 21.0882 21.0526C20.7737 21.0526 20.5037 21.1609 20.2784 21.3776C20.0536 21.5947 19.9412 21.8548 19.9412 22.1579C19.9412 22.461 20.0536 22.7211 20.2784 22.9382C20.5037 23.1548 20.7737 23.2632 21.0882 23.2632Z" fill="white"/>
                            <defs>
                                <linearGradient id="paint0_linear_877_1132" x1="1.11215" y1="-3.05251e-06" x2="34.4267" y2="1.87705" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#B98CF2"/>
                                    <stop offset="1" stop-color="#48BBDE"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        <span class="text-lg leading-[135.3%]">Поделиться</span>
                    </button>
                    <button class="flex items-center gap-3">
                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16.5" cy="16.5" r="16.5" fill="url(#paint0_linear_2601_1201)"/>
                                <path d="M19.7926 10.938C18.411 10.938 17.2202 11.584 16.5706 12.6541C15.9211 11.584 14.7303 10.938 13.3487 10.938C12.3579 10.9392 11.408 11.3269 10.7073 12.0163C10.0067 12.7056 9.61252 13.6401 9.61133 14.615C9.61133 16.4275 10.7712 18.3218 13.0523 20.244C14.1056 21.1257 15.2428 21.9055 16.4482 22.5725C16.4858 22.5925 16.5279 22.603 16.5706 22.603C16.6134 22.603 16.6555 22.5925 16.6931 22.5725C17.8985 21.9055 19.0357 21.1257 20.089 20.244C22.3701 18.3218 23.53 16.4275 23.53 14.615C23.5288 13.6401 23.1346 12.7056 22.434 12.0163C21.7333 11.3269 20.7834 10.9392 19.7926 10.938ZM16.5706 22.059C15.6685 21.5544 10.1268 18.2964 10.1268 14.615C10.1279 13.7746 10.4676 12.9689 11.0716 12.3747C11.6756 11.7805 12.4946 11.4462 13.3487 11.4452C14.709 11.4452 15.8522 12.1622 16.3322 13.316C16.3516 13.3625 16.3847 13.4023 16.4271 13.4303C16.4696 13.4583 16.5195 13.4732 16.5706 13.4732C16.6218 13.4732 16.6717 13.4583 16.7142 13.4303C16.7566 13.4023 16.7896 13.3625 16.8091 13.316C17.2891 12.1622 18.4323 11.4452 19.7926 11.4452C20.6467 11.4462 21.4657 11.7805 22.0697 12.3747C22.6737 12.9689 23.0134 13.7746 23.0145 14.615C23.0145 18.292 17.4728 21.5544 16.5706 22.059Z" fill="white"/>
                            <defs>
                            <linearGradient id="paint0_linear_2601_1201" x1="1.07944" y1="-2.96273e-06" x2="33.4141" y2="1.82184" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#B98CF2"/>
                                <stop offset="1" stop-color="#48BBDE"/>
                            </linearGradient>
                            </defs>
                        </svg>
                        <span class="text-lg leading-[135.3%]">В избранное</span>
                    </button>
                </div>
                <div class="w-full bg-gradient-to-r from-[#B98CF2] to-[#48BBDE] rounded-[25px] p-[2px]">
                    <div class="w-full h-full bg-white px-5 py-7 flex flex-col gap-5 items-center rounded-[25px]">
                        <p class="leading-[135.3%] font-light text-lg md:text-xl xl:text-2xl text-center">Бронирование отеля</p>
                        <div class="flex flex-col gap-4 items-center w-full">
                            <div class="w-full relative rounded-[10px] border border-[#B1B1B1]">
                                <input readonly :value="dateFrom" type="date" class="rounded-l-[10px] px-10 py-2.5 md:text-lg xl:text-xl bg-[#EBEBEB] focus:ring-0 focus:outline-none w-1/2">
                                <input readonly :value="dateTo" type="date" class="rounded-r-[10px] px-10 py-2.5 md:text-lg xl:text-xl bg-[#EBEBEB] focus:ring-0 focus:outline-none w-1/2">
                                <div class="absolute left-1/2 -translate-x-1/2 top-0 h-full w-px bg-[#B1B1B1]"></div>
                            </div>
                            <input type="text" placeholder="2 гостя, 1 номер" class="w-full px-10 py-2.5 md:text-lg xl:text-xl placeholder-[#696969] rounded-[10px] bg-[#EBEBEB] border border-[#B1B1B1] focus:ring-0 focus:outline-none">
                            <input type="text" placeholder="+7 (___) - ___ - __ - __" class="w-full px-10 py-2.5 md:text-lg xl:text-xl placeholder-[#696969] rounded-[10px] bg-[#EBEBEB] border border-[#B1B1B1] focus:ring-0 focus:outline-none">
                        </div>
                        <div v-if="days" class="flex items-center justify-between px-2.5 w-full">
                            <p class="text-base xl:text-lg font-light leading-[165.3%]">Итого за {{ days }} суток</p>                         
                            <p class="text-lg md:text-xl xl:text-2xl font-medium">{{ prices }} ₽</p>   
                        </div>
                        <div v-else class="flex items-center justify-between px-2.5 w-full">
                            <p class="text-base xl:text-lg font-light leading-[165.3%]">Итого за _ суток</p>                            
                            <p class="text-lg md:text-xl xl:text-2xl font-medium">0 ₽</p>   
                        </div>
                        <button v-if="authenticated" @click="bookApartment" class="py-3 text-white rounded-[10px] bg-gradient-to-r from-[#B98CF2] to-[#48BBDE] text-center w-full text-lg md:text-xl xl:text-2xl leading-[135.3%]">Забронировать</button>
                    </div>
                </div>    
            </div>
        </div>
    </div>
</template>

<script setup>
    /* map */
    import { yandexMap, yandexMarker } from 'vue-yandex-maps'
    const apartId = useRoute().params.id

    /* data */
    const config = useRuntimeConfig()
    const { data, error } = await useFetch(`${config.public.APIbaseURL}/api/admin/getApartments`)
    const apartment = data.value.filter(el => {
        return el._id == apartId
    })

    /* prices and days */
    const { city, dateFrom, dateTo} = storeToRefs(useSearchStore())
    const days = ref()
    const prices = ref()
    days.value = Math.round((new Date(dateTo.value).getTime() - new Date(dateFrom.value).getTime())/(1000 * 60 * 60 * 24))
    prices.value = days.value * apartment[0].pricePerDay

    /* user */
    const { authenticated, id } = storeToRefs(useUserStore())

    /* book */
    const router = useRouter()
    const bookApartment = async () => {        
        const { data, error, pending } = await useFetch(`${config.public.APIbaseURL}/api/user/bookapartment`, {
            method: "POST",
            body: {
                apartmentId: apartId,
                userId: id.value,
                date1: dateFrom.value,
                date2: dateTo.value
            }
        })    
        if(data.value) {
            console.log(data.value)
            router.push('/')
        }
        if(error.value) {
            console.log(error.value)
        }
    }
</script>

<style>
    .yandex-container {
        height: 400px;
    }
    .yandex-balloon {
        height: 60px;
        width: 250px;
    }
</style>
