<template>
    <div>
        <div>당첨 숫자</div>
        <div id="결과창">
            <lotto-ball v-for="ball in winBalls" :number="5"></lotto-ball>
        </div>
        <div>보너스</div>
        <lotto-ball v-if="bonus"></lotto-ball>
        <button v-if="redo">한 번 더!</button>
    </div>
</template>

<script>
    import LottoBall from './LottoBall';

    function getWinNumbers() {
        const candidate = Array(45).fill().map((v, i) => i + 1);
        const shuffle = [];
        while (candidate.length > 0) {
            shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
        }
        const bonusNumber = shuffle[shuffle.length - 1];
        const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
        return [...winNumbers, bonusNumber];
    }

export default{
    components:{
        'lotto-ball': LottoBall,
        //LottoBall,
        //생략가능 (파스칼->케밥)
    },

    data(){
        return {
            //모든 뽑은 숫자들
            winNumbers: getWinNumbers(),
            //시각적인 용도, 하나씩 보여줄거
            winBalls: [],
            bonus: null,
            redo: false,
        };
    },

    computed:{
        
    },
    methods:{
        
    },

    
}
</script>

<style scoped>
    
</style>
