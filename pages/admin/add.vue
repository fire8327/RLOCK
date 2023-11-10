<template>
    <div class="flex flex-col gap-5 py-10">
        <div class="flex md:items-end md:justify-between max-md:flex-col gap-4">
            <p class="text-lg md:text-xl xl:text-2xl leading-[135.3%]">Добавление недвижимости</p>
            <button class="w-fit py-2 px-5 gap-2.5 text-base md:text-lg xl:text-xl leading-[135.3%] border border-black rounded-full bg-[#D9D9D9]">
                Сохранить
            </button>
        </div>
        <div class="flex gap-5 max-xl:flex-col">
            <div class="flex flex-col gap-5 w-full xl:w-[30%]">
                <div class="rounded-xl bg-[#808080] h-[387px]"></div>
                <button class="w-full text-center py-2 bg-[#D9D9D9] border border-black rounded-full">Редактировать фотографии</button>
            </div>
            <div class="w-full xl:w-[70%] flex flex-col gap-5 text-black leading-[135.3%]">
                <div class="flex max-lg:flex-col lg:items-center gap-5">
                    <input type="text" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[25%]" placeholder="Страна">
                    <input type="text" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[45%]" placeholder="Область">
                    <input type="text" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[30%]" placeholder="Город">
                </div>
                <div class="flex max-lg:flex-col lg:items-center gap-5">
                    <input type="text" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[25%]" placeholder="Округ">
                    <input type="text" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[45%]" placeholder="Ветка метро">
                    <input type="text" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[30%]" placeholder="Метро">
                </div>
                <div class="flex max-lg:flex-col lg:items-center gap-5">
                    <input type="text" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[50%]" placeholder="Линия метро">
                    <input type="text" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[25%]" placeholder="Геопозиция">
                    <input type="text" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[25%]" placeholder="Геопозиция">
                </div>
                <input type="text" class="py-1.5 px-5 bg-[#D9D9D9] focus:outline-none rounded-[10px] border border-[#6A6A6A] w-full text-2xl lg:w-[74%]" placeholder="Адрес">
            </div>
        </div>
    </div>
</template>
