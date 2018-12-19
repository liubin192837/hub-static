<template>
<Carousel v-model="value1" loop :height="500" >
    <CarouselItem>
        <div class="demo-carousel" >1</div>
    </CarouselItem>
    <CarouselItem>
        <div class="demo-carousel">2</div>
    </CarouselItem>
    <CarouselItem>
        <div class="demo-carousel">3</div>
    </CarouselItem>
    <CarouselItem>
        <div class="demo-carousel">4</div>
    </CarouselItem>
</Carousel>

<!--  <div class="home">
    <Button type="primary" v-on:click="increment()">counter | {{count}}</Button>
    <Button type="warning" v-on:click="callApi">发请求</Button>
  </div> -->
</template>

<script>
/* eslint-disable */
// @ is an alias to /src
import {
    mapState,
    mapMutations,
    mapActions
} from 'vuex'
import {
    MUTATION
} from '../constants'

export default {
    name: 'home',
    components: {},
    data() {
        return {
            value1: 0
        }
    },
    computed: {
        ...mapState('global', [
            'count',
            'user'
        ])
    },
    methods: {
        ...mapActions('global', [
            'callApi'
        ]),
        //tongbu
        ...mapMutations('global', {
            //onclick中直接使用increment方法名会默认传入event对象到payload
            increment: MUTATION.INCREMENT
        })
    }
}
</script>

<!--
// 直接通过this.$store访问state,getters,mutations,actions
// getName() {
//   // 异步
//   this.$store.dispatch('global/getName')
// },
// tigger() {
//   // 同步
//   this.$store.commit('global/test', {xxx: 23424})
// }
-->
