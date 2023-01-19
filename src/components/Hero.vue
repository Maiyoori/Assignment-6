<script setup>
</script>

<template>
    <div class="hero-container">
        <p class="main">Watch trending movies anytime, anywhere</p>
        <p class="sign-in">Sign into your account to watch your downloaded movies</p>
    </div>

    <body>
        <div class="content">
            <span class="thor"><img src="../assets/thor.jpg"></span>
            <span class="endgame"><img src="../assets/endgame.jpg"></span>
            <span class="hill-house"><img src="../assets/hill-house.jpg"></span>
            <span class="joker"><img src="../assets/joker.jpg"></span>
            <span class="now-you-see-me"><img src="../assets/now-you-see-me.jpg"></span>
            <span class="extraction"><img src="../assets/extraction.jpg"></span>
            <span class="uncharted"><img src="../assets/uncharted.jpg"></span>
            <span class="lion-king"><img src="../assets/lion-king.jpg"></span>
        </div>
    </body>
</template>

<style scoped>
.main,
.sign-in {
    margin-left: 55%;
    margin-right: 1.6%;
    padding: 10px;
    position: absolute;
    color: rgb(243, 181, 38);
    border: solid white;
    background-color: rgb(35, 31, 32);
    text-align: center;
}

.main {
    font-size: 70px;
    margin-top: 150px;
    margin-right: 1.6%;
}

.sign-in {
    font-size: 29px;
    margin-top: 320px;
    padding-left: 21px;
    padding-right: 21px;
    margin-top: 430px;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    height: 600px;
    width: 600px;
    margin-top: 50px;
}

.content {
    position: relative;
    transform-style: preserve-3d;
    animation: rotate 30s linear infinite;
    width: 230px;
    height: 330px;
    margin-top: 195px;
    margin-left: 230px;
}

@keyframes rotate {
    0% {
        transform: perspective(1000px) rotateY(0deg);
    }

    100% {
        transform: perspective(1000px) rotateY(360deg);
    }
}

.content span {
    position: absolute;
    transform-origin: center;
    transform-style: preserve-3d;
    transform: rotateY(calc(var(--i)*45deg)) translateZ(300px);
    width: 100%;
    height: 102%;
}

.content span img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 1.5s;
}

.thor {
    --i: 1;
}

.hill-house {
    --i: 2
}

.joker {
    --i: 3
}

.now-you-see-me {
    --i: 4
}

.endgame {
    --i: 5
}

.extraction {
    --i: 6
}

.uncharted {
    --i: 7
}

.lion-king {
    --i: 8
}
</style>