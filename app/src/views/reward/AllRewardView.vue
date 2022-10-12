<template>
    <section class="mx-8">
        <h1 class="text-3xl text-yellow-700">{{ title }}</h1>
        <div v-if="error != null">
            {{ error }}
        </div>

        <reward-card v-for="reward in rewards" :reward="reward" :key="reward.id" :url="`rewards/${reward.id}`">
            {{ reward.detail }}
            <template #total_amount>
                จำกัดจำนวน {{ reward.total_amount }} สิทธิ์
            </template>
        </reward-card>
        {{ selected }}
        <p>Stack: {{ stack }}</p>
    </section>
</template>

<script>
import RewardCard from '@/components/reward/RewardCard.vue'
// Reactivity
export default {
    data() {
        return {
            title: "Reward List",
            stack: 0,
            selected: null,
            rewards: null,
            error: null,
        }
    }, methods: {
        // Methods
        selectReward(reward) {
            // this.$router.push(`/reward/${reward.id}`)
            this.$router.push({
                name: 'reward.show',
                params: { id: reward.id } 
            })
            if (this.selected.id === reward.id) {
                this.stack += 1
                console.log(this.stack)
            } else {
                this.stack = 0
            }
        }
    }, 
    async mounted() {
        // Lifecycle
        console.log("mounted")
        // const response = axios.get(url).then(responseData => {
        //     this.reward = responseData.data.data
        // })
        // promise

        // Non-Blocking I/O
        // Asymchronous Language
            // 1. Callback -> Hell loop
            // 2. Promise -> Hell loop
            // 3. Async/Await

        try {
            const response = await this.$axios.get('/rewards')
            if (response.status === 200) {
                this.rewards = response.data.data
            } else {
                console.error(response.status)
            }
        } catch (error) {
            this.error = error.message
        }
    },
    components: {
        RewardCard,
    }
}
</script>

<style>
</style>