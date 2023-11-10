<template>
    <div class="flex flex-col gap-5 py-10">
        <div class="flex md:items-end md:justify-between max-md:flex-col gap-4">
            <p class="text-lg md:text-xl xl:text-2xl leading-[135.3%]">Редактирование недвижимости</p>
            <button class="w-fit py-2 px-5 gap-2.5 text-base md:text-lg xl:text-xl leading-[135.3%] border border-black rounded-full bg-[#D9D9D9]">
                Удалить
            </button>
        </div>
        <div class="flex gap-5 max-xl:flex-col">
            <div class="flex flex-col gap-5 w-full xl:w-[30%]">
                <div class="rounded-xl bg-[#808080] h-[387px]"></div>
                <button class="w-full text-center py-2 bg-[#D9D9D9] border border-black rounded-full">Редактировать фотографии</button>
            </div>
            <div class="w-full xl:w-[70%] flex flex-col gap-3 text-black leading-[135.3%]">
                <div class="flex max-lg:flex-col lg:items-center gap-5">
                    <div class="flex flex-col lg:w-[25%]">
                        <p class="text-[#606060] text-[10px] ml-1.5 font-light -mb-1.5">Страна</p>
                        <input type="text" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl" value="Россия" placeholder="Страна">
                    </div>
                    <div class="flex flex-col lg:w-[45%]">
                        <p class="text-[#606060] text-[10px] ml-1.5 font-light -mb-1.5">Область</p>
                        <input type="text" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl" value="Московская область" placeholder="Область">
                    </div>
                    <div class="flex flex-col lg:w-[30%]">
                        <p class="text-[#606060] text-[10px] ml-1.5 font-light -mb-1.5">Город</p>
                        <input type="text" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl" value="Москва" placeholder="Город">
                    </div>
                </div>
                <div class="flex max-lg:flex-col lg:items-center gap-5">
                    <div class="flex flex-col lg:w-[25%]">
                        <p class="text-[#606060] text-[10px] ml-1.5 font-light -mb-1.5">Округ</p>
                        <input type="text" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl" value="ЮАО" placeholder="Округ">
                    </div>
                    <div class="flex flex-col lg:w-[45%]">
                        <p class="text-[#606060] text-[10px] ml-1.5 font-light -mb-1.5">Ветка метро</p>
                        <input type="text" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl" value="Чертаново Северное" placeholder="Ветка метро">
                    </div>
                    <div class="flex flex-col lg:w-[30%]">
                        <p class="text-[#606060] text-[10px] ml-1.5 font-light -mb-1.5">Метро</p>
                        <input type="text" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl" value="Чертановская" placeholder="Метро">
                    </div>
                </div>
                <div class="flex max-lg:flex-col lg:items-end gap-5">
                    <div class="flex flex-col lg:w-[50%]">
                        <p class="text-[#606060] text-[10px] ml-1.5 font-light -mb-1.5">Линия метро</p>
                        <input type="text" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl" value="Серпуховоско-Тимирязевская" placeholder="Линия метро">
                    </div>
                    <div class="flex flex-col lg:w-[25%]">
                        <p class="text-[#606060] text-[10px] ml-1.5 font-light -mb-1.5">Геопозиция на Яндекс.Карте</p>
                        <input type="text" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl" value="55.641569" placeholder="Геопозиция">
                    </div>
                    <input type="text" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[25%]" value="37.609119" placeholder="Геопозиция">
                </div>
                <div class="flex flex-col">
                    <p class="text-[#606060] text-[10px] ml-1.5 font-light -mb-1.5">Адрес</p>
                    <input type="text" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[74%]" value="Балаклавский проспект, д. 10, корп.3, кв. 5" placeholder="Адрес">
                </div>
            </div>
        </div>
    </div>
</template>