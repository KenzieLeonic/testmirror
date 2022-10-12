<template>
    <div class="m-8" v-if="reward">
        <h1 class="text-3xl">{{ reward.name }}</h1>
        <p>{{ reward.detail }}</p>
        <p>ทั้งหมดจำนวน {{ reward.total_amount }} สิทธิ์</p>
        <p>แลกสิทธิ์ด้วย {{ reward.point }} แต้ม</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: "Show Reward",
                reward: null,
                error: null,
            }
        },
        async created() {
            const id = this.$route.params.id
            try {
                const response = await this.$axios.get(`/rewards/${id}`)
                if (response.status == 200) {
                    this.reward = response.data.data
                    console.table(this.reward)
                }
            } catch (error) {
                this.error = error.message
            }
        }
    }
</script>