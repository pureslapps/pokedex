.bg {
  animation: kenburns 20s infinite;
}
@keyframes kenburns {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  95% {
    transform: scale3d(1.5, 1.5, 1.5) translate3d(-190px, -120px, 0px);
    animation-timing-function: ease-in;
    opacity: 1;
  }
  100% {
    transform: scale3d(2, 2, 2) translate3d(-170px, -100px, 0px);
    opacity: 0;
  }
}
