<template>
    <div>
        <!-- :style - style을 동적으로 변화시킬수 있다 & computed를 사용해서 값이 변화할 때 자동으로 값을 바꾼다 -->
        <div id="computer" :style="computedStyleObject"></div>
        <div>
            <button @click="onClickButton('바위')">바위</button>
            <button @click="onClickButton('가위')">가위</button>
            <button @click="onClickButton('보')">보</button>
        </div>
        <div>{{result}}</div>
        <div>현재 {{score}}점</div>
    </div>
</template>

<script>
    const rspCoords = {
        바위: '0',
        가위: '-142px',
        보: '-284px',
    };

    const scores = {
        가위: 1,
        바위: 0,
        보: -1,
    }

    //가위,바위,보 중 하나 return
    const computerChoice = (imgCoord) => {
        return Object.entries(rspCoords).find(function (v){
            return v[1] === imgCoord;
        })[0];
    }

    let interval = null;

export default{
    data(){
        return {
            imgCoord: rspCoords.바위,
            result: '',
            score: 0,
        }
    },
    computed:{
        computedStyleObject(){
            return{
                background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCoord} 0`,
            }
        }
    },
    methods:{
        changeHand(){
            interval = setInterval(() => {
                if(this.imgCoord === rspCoords.바위){
                    this.imgCoord = rspCoords.가위;
                }else if(this.imgCoord === rspCoords.가위){
                    this.imgCoord = rspCoords.보;
                }else if(this.imgCoord === rspCoords.보){
                    this.imgCoord = rspCoords.바위;
                }
            }, 100);
        },

        onClickButton(choice){
            //결과를 보여주기 위해 잠깐 멈춤
            clearInterval(interval);
            const myScore = scores[choice];
            const cpuScore = scores[computerChoice(this.imgCoord)];
            const diff = myScore - cpuScore;
            if(diff === 0){
                this.result = '비겼습니다';
            }else if([-1, 2].includes(diff)){
                this.result = '이겼습니다';
                this.score += 1;
            }else{
                this.result = '졌습니다.';
                this.score -= 1;
            }
            setTimeout(() => {
                this.changeHand();
            }, 1000);
        },
    },

    beforeCreate(){
        console.log('beforeCreated');
    },

    //보여지는데 화면에 나타나기 전
    created(){
        console.log('created');
    },

    beforeMount(){
        console.log('beforeMount');
    },

    //화면에 나타난 후
    //화면 조작은 mounted에서
    mounted(){
        console.log('mounted');
        this.changeHand();
    },

    //데이터가 바뀌어서 화면도 바뀔 때
    updated(){
        console.log('updated');
    },

    beforeDestroy(){
        console.log('beforeDestroy');
        //setInterval을 멈추고 memory leak 방지
        clearInterval(interval);
    },

    //component가 없어질때
    destroyed(){
        console.log('destroyed');
    }
}
</script>

<style scoped>
    #computer{
        width: 142px;
        height: 200px;
        background-position: 0 0;
    }
</style>
