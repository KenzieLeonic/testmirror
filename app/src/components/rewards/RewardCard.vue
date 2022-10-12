<template lang="">
    <div>
        <div class="p-4 border-2 mb-4 border-blue-800 rounded-lg grid grid-cols-2">
                <h3 class="text-xl">{{ reward.name }}</h3>
                <p class="text-5xl">{{ reward.point }}</p>

                <div class="italic">
                    <slot></slot>
                </div>

                <div class="text-2xl font-bold">
                    <slot name="total_amount"></slot>
                </div>

                <router-link v-if="url != ''" :to="url">Detail 1</router-link>

                <span class="text-blue-700 my-style" @click="onClickButton()"
                :class="url == '' ? '': 'cursor-pointer'">Detail 2</span>
                <button @click="onClickButton()" class="px-2 py-1 border rounded-xl">Redeem</button>
                <button @click="onClickLike()" class="px-2 py-1 border rounded-xl">{{ likecount }} Likes</button>
            </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            likecount: 0,
            error: null,
        }
    },
    props: {
        reward: {
            type: Object,
            required: true,
        },
        url: {
            type: String,
            default: '',
        },
    },
    methods: {
        onClickButton() {
            if (this.url != '') {
                this.$router.push(this.url)
            }
        },
        onClickLike() {
            this.likecount += 1
        }
    }
}
</script>
<style scoped>
    /* .my-style {
        display: block;
        padding: 5px;
        background-color: rgb(100, 185, 20);
    } */
    .my-style {
        @apply block p-2 bg-pink-300;
    }
</style>