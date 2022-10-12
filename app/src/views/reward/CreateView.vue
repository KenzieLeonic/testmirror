<template>
    <div class="m-8">
        <h1 class="text-3xl">Create New Reward</h1>
        <div>
            <div>
                <label for="name">Reward Name</label>
                <input type="text" v-model="reward.name">
            </div>

            <div>
                <label for="detail">Reward Detail</label>
                <textarea name="" id="" cols="30" rows="10" v-model="reward.detail"></textarea>
            </div>

            <div>
                <label for="total_amout">Total Amount</label>
                <input type="number" v-model="reward.total_amount">
            </div>

            <div>
                <label for="point">Point</label>
                <input type="number" v-model="reward.point">
            </div>

            <button @click="saveNewReward()" class="px-4 py-3 rounded-lg bg-lime-400">Create</button>
        </div>

        <div class="mt-8">
            (preview)
            <!-- <RewardCard reward="static value"></RewardCard> --> <!-- static unchangeable value @string -->
            <RewardCard :reward="{ name: reward.name, point: reward.point}"></RewardCard>
            <!-- <div class="p-4 border-2 mb-4 border-blue-800 rounded-lg grid grid-cols-2">
                <h3 class="text-xl">{{ reward.name }}</h3>
                <p class="text-5xl">{{ reward.point }}</p>
                <span>Detail</span>
                <button class="px-2 py-1 border rounded-xl">Redeem</button>
            </div> -->
        </div>
    </div>
</template>

<script>
    import RewardCard from '@/components/reward/RewardCard.vue'
    export default {
        data() {
            return {
                reward: {
                    name: "",
                    detail: "",
                    total_amount: 1,
                    point: 0,
                },
                error: null,
            }
        },
        components: {
            RewardCard,
        },
        methods: {
            async saveNewReward() {
                // TODO: validate date here
                try {
                    this.reward.balance = this.reward.total_amount
                    this.reward.is_active = true
                    const response = await this.$axios.post("/rewards", this.reward)
                    if (response.status == 201) {
                        let new_reward_id = response.data.reward_id
                        this.$router.push(`/rewards/${new_reward_id}`)
                        console.log(response.data.message)
                    }
                } catch (error) {
                    this.error = error.message
                    console.log(error)
                }
            }
        }
    }
</script>