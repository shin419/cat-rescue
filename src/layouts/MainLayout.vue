<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated bordered class="bg text-black text-bold q-py-md">
      <div class="row justify-center">
        <div class="widthScreen">
          <q-toolbar>
            <div class="row items-center cursor">
              <q-img width="60px" src="~assets/logo.png" />
              <span class="q-ml-sm text-h6">Catmeatsurvivor</span>
            </div>
            <q-space ></q-space>
            <div class="row items-center">
              <span class="q-px-md cursor">ABOUT</span>
              <span class="q-px-md cursor">WHY NOW?</span>
              <span class="q-px-md cursor">COMMUNITY</span>
              <span class="q-pl-md cursor">BUNDLES</span>
            </div>
          </q-toolbar>
        </div>
      </div>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout'
}
</script>
