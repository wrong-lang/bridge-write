<script setup>
import {onMounted, ref} from "vue";
import elementDraggable from "./lib/elementDraggable.ts";
import {downloadImage} from "./lib/eventHandler.ts";

let text = ref("อยากกินไก่ย่าง"),
    fontSize = ref(12),
    color = ref("#ffffff"),
    x = ref(0),
    y = ref(0)

onMounted(() => {
  document.getElementById('bgImg').onload = () => {
    x.value = (document.getElementById('bgImg').offsetWidth / 2 - document.getElementById('textbox').offsetWidth / 2 - 10)
    y.value = (document.getElementById('bgImg').offsetHeight / 2 - document.getElementById('textbox').offsetHeight / 2 + 100)

    document.getElementById("bridge-text").style.fontSize = fontSize.value + "px"
    document.getElementById('textbox').style.transform = "translate(" + x.value + "px, " + y.value + "px)"
    elementDraggable(document.getElementById('textbox'))

    document.getElementById('textbox').onmousemove = function () {
      x.value = document.getElementById('textbox').offsetLeft
      y.value = document.getElementById('textbox').offsetTop
    }

    document.getElementsByName("fontSize")[0].addEventListener("input", (event) => {
      document.getElementById("bridge-text").style.fontSize = event.target.value + "px"
    })

    document.getElementsByName("color")[0].addEventListener("input", (event) => {
      document.getElementById("bridge-text").style.color = event.target.value
      document.getElementById("bridge-text").style.textShadow = "0 0 5px " + event.target.value + ", 0 0 10px " + event.target.value + ", 0 0 15px " + event.target.value + ", 0 0 20px " + event.target.value + ", 0 0 25px " + event.target.value + ", 0 0 30px " + event.target.value + ", 0 0 35px " + event.target.value
    })

    document.getElementsByName("x-axis")[0].addEventListener("input", (event) => {
      document.getElementById("textbox").style.left = event.target.value + "px"
    })

    document.getElementsByName("y-axis")[0].addEventListener("input", (event) => {
      document.getElementById("textbox").style.top = event.target.value + "px"
    })
  }
})
</script>

<template>
  <center class="mb-6">
    <a href="https://tinarskii.com">Website of <span class="underline">Tinarskii</span></a>
  </center>
  <div class="grid md:grid-cols-2 grid-cols-1 gap-8 min-h-screen">
    <div class="flex flex-col md:col-span-2 gap-2 w-full items-center">
      <h1 class="font-black text-slate-500 sm:text-6xl text-5xl text-center">
        Bridge Write
      </h1>
      <p class="font-extrabold text-slate-400 italic text-center">
        (มันไม่ผิดกฏหมายแน่ ๆ 100% ถ้าขออนุญาต)
      </p>
    </div>
    <div id="frameImg" class="rounded-lg relative">
      <img id="bgImg" src="/rama8.jpg" alt="Rama VIII Bridge" class="rounded-lg">
      <div id="textbox" class="absolute z-[69420] select-none top-0 left-0 hover:border border-red-500"><span
          id="bridge-text" style="font-size: 24px">{{ text }}</span></div>
    </div>
    <div class="flex flex-col gap-4 w-full bg-white/30 p-4 rounded-lg">
      <div class="flex flex-col">
        <label for="text" class="text-slate-500">ข้อความ:</label>
        <input type="text" name="text" class="p-2 border rounded" :value="text"
               @input="event => text = event.target.value">
      </div>
      <div class="flex flex-col">
        <label for="fontSize" class="text-slate-500">ขนาดอักษร: {{ fontSize }}px</label>
        <input type="range" name="fontSize" :value="fontSize" min="1" max="128"
               @input="event => fontSize = event.target.value">
      </div>
      <div class="flex flex-col p-4 rounded-lg bg-black/10 w-full">
        <div class="flex flex-col w-full">
          <label for="y-axis" class="text-slate-500">แกนตั้ง: {{ y }}</label>
          <input type="range" name="y-axis" :value="y" min="-100" max="500" @input="event => y = event.target.value">
        </div>
        <div class="flex flex-col w-full">
          <label for="x-axis" class="text-slate-500">แกนนอน: {{ x }}</label>
          <input type="range" name="x-axis" :value="x" min="-100" max="500" @input="event => x = event.target.value">
        </div>
      </div>
      <div class="flex flex-col">
        <label for="color" class="text-slate-500">สีข้อความ:</label>
        <input type="color" name="color" :value="color" @input="event => color = event.target.value">
      </div>
      <button class="bg-blue-500 px-4 py-2 rounded-lg text-white" @click="downloadImage()">🖼️ ดาวน์โหลดรูปนี้</button>
      <a href="https://ko-fi.com/tinarskii" class="text-white text-[16px] rounded-[100px] px-4 py-2 kofi bg-[#794bc4]">
        <center>☕ สนับสนุน</center>
      </a>
    </div>
  </div>
</template>