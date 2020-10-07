<template>
  <div>
    <!-- 아래의 message가 바뀌면 전체가 다시 로딩된다 -> 시간이 오래걸리는 계산식을 쓴다면? -->
    <!-- computed를 쓰면 캐싱이 되기 때문에 다시 계산x -->
    <div id="screen" :class="state" @click="onClickScreen">{{message}}</div>
    
    <!-- v-if: 태그자체가 존재x / v-show: display none처리 -->
    <!-- div 대신 template => 없는셈 쳐진다 (위 screen, 아래 div, btn은 형제) -->
    <template v-show="result.length">
      <div>평균 시간: {{average}}ms</div>
      <button @click="onReset">리셋</button>
    </template>
  </div>
</template>

<script>
  let startTime = 0;
  let endTime = 0;
  let timeout = null;
  export default {
    data() {
      return{
        result: [],
        state: 'waiting',
        message: '클릭해서 시작하세요.',
      }
    },

    // 성능에 영향을 준다
    computed: {
      average(){
        return this.result.reduce((a,c) => a + c, 0) / this.result.length || 0;
      }
    },
    
    methods: {
      onReset(){
        this.result = [];
      },
      onClickScreen(){
        if(this.state === 'waiting'){
          this.state = 'ready';
          this.message = '초록색이 되면 클릭하세요';
          timeout = setTimeout(() => {
            this.state = 'now';
            this.message = '지금 클릭!';
            startTime = new Date();
          }, Math.floor(Math.random() * 1000) + 2000); //2~3초
        }else if(this.state === 'ready'){
          clearTimeout(timeout);
          this.state = 'waiting'
          this.message = '성급하시군요! 초록색이 된 후에 클릭하세요';
        }else if(this.state === 'now'){
          endTime = new Date();
          this.state = 'waiting';
          this.message = '클릭해서 시작하세요';
          this.result.push(endTime - startTime);
        }
      },
    }
  };
</script>

<!-- scoped - 이 컴포넌트에서만 쓰겠다 -->
<style scoped>
  #screen{
    width: 300px;
    height: 200px;
    text-align: center;
    user-select: none;
  }
  #screen.waiting{
    background-color: aqua;
  }
  #screen.ready{
    background-color: red;
    color: white;
  }
  #screen.now{
    background-color: greenyellow;
  }
</style>
