<template>
  <div class="container__main">
    <div class="gradient-group" ref="gradientGroup">
      <div class="blue"></div>
      <div class="purple"></div>
      <div class="red"></div>
      <div class="yellow"></div>

      <div class="main">
        <div class="main__flex">
          <header v-show="showNavbar">
            <nav class="navbar">
              <div class="navbar__container">
                <img src="@/assets/images/mainblock/logo_1.svg" alt="logo" />
                <svg
                  class="navbar__logo-text"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="11"
                  viewBox="0 0 30 11"
                  fill="none"
                >
                  <path
                    d="M0.212891 0.453125V10.5856H2.86179V2.7521H6.92058V10.5856H9.56948V0.453125H0.212891Z"
                    fill="white"
                  />
                  <path
                    d="M25.4814 8.44798H23.5241V6.43858H25.4814C26.1061 6.43858 26.7308 6.6951 26.7308 7.46465C26.6892 8.19146 26.1061 8.44798 25.4814 8.44798ZM25.7313 4.25816H23.5241V2.71905H28.48V0.453125H20.9004V10.5856H25.8146C27.772 10.5856 29.2712 9.55956 29.2712 7.4219C29.3129 5.28424 27.8136 4.25816 25.7313 4.25816Z"
                    fill="white"
                  />
                  <path
                    d="M15.9091 8.36997C14.139 8.36997 13.1696 7.11205 13.1696 5.51868C13.1696 4.26076 13.8861 2.66739 15.8669 2.66739C17.0891 2.66739 17.8899 3.42215 18.1849 3.75759L19.7864 2.16423C18.8171 1.0321 17.3841 0.277344 15.7405 0.277344C12.8325 0.277344 10.5566 2.41581 10.5566 5.51868C10.5566 8.4119 12.8325 10.76 15.7405 10.76C17.4684 10.76 19.0278 9.92141 19.955 8.62156L18.3535 7.02819C17.8477 7.78294 17.0048 8.36997 15.9091 8.36997Z"
                    fill="white"
                  />
                </svg>
                <img src="@/assets/images/mainblock/logo_2.svg" alt="logo" />
                <svg
                  class="navbar__logo-text"
                  xmlns="http://www.w3.org/2000/svg"
                  width="95"
                  height="12"
                  viewBox="0 0 95 12"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.0696 11.9848H8.48069V10.9024H6.90731H0.270508V0.889983H3.05968V8.65676H6.90731V0.889983H9.69648V8.65676H11.0696V11.9848ZM12.981 0.889983V10.9024H15.6558L19.7752 5.03798V10.9024H22.5643V0.889983H19.9039L15.7702 6.7687V0.889983H12.981ZM32.4096 10.2808V11.3744H29.8207V10.2688C28.9004 10.204 28.0946 10.0433 27.4034 9.78673C26.488 9.44345 25.7919 8.94283 25.3151 8.28487C24.8478 7.61737 24.6142 6.81161 24.6142 5.86759C24.6142 4.91402 24.8478 4.10826 25.3151 3.4503C25.7919 2.78281 26.4927 2.27742 27.4177 1.93414C28.1054 1.67892 28.9063 1.51857 29.8207 1.4531V0.417969H32.4096V1.44763C33.3515 1.51043 34.1668 1.67737 34.8555 1.94844C35.7614 2.29172 36.4479 2.79711 36.9152 3.4646C37.3824 4.12256 37.616 4.92356 37.616 5.86759C37.616 6.80208 37.3872 7.60307 36.9295 8.27057C36.4813 8.92852 35.8138 9.43391 34.927 9.78673C34.2187 10.0609 33.3795 10.2256 32.4096 10.2808ZM29.8207 3.67171C29.4949 3.70972 29.2041 3.76465 28.9482 3.83649C28.4046 3.98906 28.0041 4.23222 27.7467 4.56597C27.4892 4.89018 27.3605 5.32405 27.3605 5.86759C27.3605 6.40158 27.4987 6.83545 27.7753 7.1692C28.0613 7.50295 28.4761 7.74611 29.0197 7.89868C29.2627 7.96573 29.5297 8.01804 29.8207 8.05563V3.67171ZM32.4096 3.66412V8.07055C32.7588 8.03006 33.0687 7.968 33.3393 7.88437C33.8638 7.72227 34.25 7.47434 34.4979 7.14059C34.7458 6.80685 34.8698 6.37774 34.8698 5.85328C34.8698 5.31929 34.7411 4.89018 34.4836 4.56597C34.2261 4.24176 33.8399 4.00337 33.325 3.8508C33.0583 3.76682 32.7531 3.70459 32.4096 3.66412ZM39.6592 0.889983V10.9024H42.4913V8.28487H44.2363C45.1517 8.28487 45.9384 8.13707 46.5964 7.84146C47.2639 7.53632 47.7788 7.10722 48.1412 6.55415C48.5035 6.00108 48.6847 5.34789 48.6847 4.59458C48.6847 3.83173 48.5035 3.17377 48.1412 2.6207C47.7788 2.0581 47.2639 1.62899 46.5964 1.33339C45.9384 1.03779 45.1517 0.889983 44.2363 0.889983H39.6592ZM42.4913 6.05353H44.0647C44.6559 6.05353 45.0945 5.9248 45.3806 5.66734C45.6762 5.40987 45.824 5.05229 45.824 4.59458C45.824 4.12733 45.6762 3.76498 45.3806 3.50752C45.0945 3.25005 44.6559 3.12132 44.0647 3.12132H42.4913V6.05353ZM53.3829 10.7165C54.06 10.9739 54.799 11.1026 55.6 11.1026C56.4105 11.1026 57.1495 10.9739 57.817 10.7165C58.494 10.459 59.0805 10.0966 59.5763 9.62939C60.0722 9.16215 60.4584 8.61385 60.7349 7.9845C61.021 7.34561 61.164 6.64951 61.164 5.89619C61.164 5.14288 61.021 4.45154 60.7349 3.82219C60.4584 3.19284 60.0722 2.64454 59.5763 2.17729C59.0805 1.70051 58.494 1.33339 57.817 1.07593C57.1495 0.818465 56.4105 0.689734 55.6 0.689734C54.799 0.689734 54.06 0.818465 53.3829 1.07593C52.7059 1.33339 52.1147 1.70051 51.6093 2.17729C51.1134 2.64454 50.7272 3.19284 50.4507 3.82219C50.1742 4.45154 50.0359 5.14288 50.0359 5.89619C50.0359 6.64951 50.1742 7.34084 50.4507 7.97019C50.7272 8.59955 51.1134 9.15261 51.6093 9.62939C52.1147 10.0966 52.7059 10.459 53.3829 10.7165ZM56.6584 8.55663C56.3342 8.69013 55.9814 8.75688 55.6 8.75688C55.2185 8.75688 54.8609 8.69013 54.5272 8.55663C54.203 8.42314 53.9169 8.23242 53.669 7.9845C53.4306 7.72703 53.2399 7.42189 53.0969 7.06908C52.9634 6.71626 52.8966 6.3253 52.8966 5.89619C52.8966 5.45755 52.9634 5.06659 53.0969 4.72331C53.2399 4.37049 53.4306 4.07012 53.669 3.82219C53.9169 3.56473 54.203 3.36925 54.5272 3.23575C54.8609 3.10225 55.2185 3.0355 55.6 3.0355C55.9814 3.0355 56.3342 3.10225 56.6584 3.23575C56.9922 3.36925 57.2782 3.56473 57.5166 3.82219C57.7645 4.07012 57.9553 4.37049 58.0888 4.72331C58.2318 5.06659 58.3033 5.45755 58.3033 5.89619C58.3033 6.3253 58.2318 6.71626 58.0888 7.06908C57.9553 7.42189 57.7645 7.72703 57.5166 7.9845C57.2782 8.23242 56.9922 8.42314 56.6584 8.55663ZM63.2504 0.889983V10.9024H68.3853C69.6727 10.9024 70.6548 10.6449 71.3319 10.13C72.0184 9.61509 72.3617 8.91899 72.3617 8.04171C72.3617 7.1835 72.0423 6.53508 71.4034 6.09644C71.1563 5.92051 70.8711 5.77911 70.5476 5.67224C70.6994 5.59526 70.8417 5.50781 70.9743 5.40987C71.5941 4.94263 71.904 4.30374 71.904 3.49321C71.904 2.66361 71.5702 2.02472 70.9028 1.57655C70.2448 1.11884 69.3151 0.889983 68.1136 0.889983H63.2504ZM68.2709 8.87131H66.0396V6.81161H68.2709C68.6809 6.81161 68.9861 6.89743 69.1863 7.06908C69.3961 7.23118 69.501 7.48388 69.501 7.82716C69.501 8.17044 69.3961 8.43267 69.1863 8.61385C68.9861 8.78549 68.6809 8.87131 68.2709 8.87131ZM67.8418 4.89495H66.0396V2.92107H67.8418C68.2423 2.92107 68.5427 3.00689 68.7429 3.17854C68.9432 3.34064 69.0433 3.5838 69.0433 3.90801C69.0433 4.23222 68.9432 4.48015 68.7429 4.65179C68.5427 4.8139 68.2423 4.89495 67.8418 4.89495ZM77.8848 0.889983L73.4651 10.9024H76.3544L77.1351 8.95713H81.3809L82.1616 10.9024H85.1081L80.674 0.889983H77.8848ZM80.5428 6.86883L79.258 3.66739L77.9732 6.86883H80.5428ZM91.8755 8.38499V10.9024H94.6647V0.889983H90.1591C89.2532 0.889983 88.4618 1.04255 87.7847 1.34769C87.1172 1.65283 86.5975 2.09147 86.2257 2.66361C85.8633 3.22621 85.6821 3.90324 85.6821 4.6947C85.6821 5.45755 85.8538 6.11551 86.1971 6.66858C86.5499 7.22165 87.0505 7.64598 87.6989 7.94159C87.7141 7.94849 87.7293 7.95532 87.7446 7.96206L85.7107 10.9024H88.6859L90.3376 8.38499H91.8755ZM91.8755 6.19656V3.12132H90.2163C89.6633 3.12132 89.2437 3.25005 88.9576 3.50752C88.6811 3.75544 88.5428 4.13687 88.5428 4.65179C88.5428 5.15718 88.6811 5.54337 88.9576 5.81037C89.2437 6.06783 89.6537 6.19656 90.1877 6.19656H91.8755Z"
                    fill="white"
                  />
                </svg>
                <img src="@/assets/images/mainblock/logo_3.svg" alt="logo" />
                <svg
                  class="navbar__logo-text"
                  xmlns="http://www.w3.org/2000/svg"
                  width="126"
                  height="10"
                  viewBox="0 0 126 10"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.07949 10.732C1.29881 10.7606 1.50382 10.7749 1.69454 10.7749C2.32389 10.7749 2.83881 10.6319 3.23931 10.3458C3.64934 10.0502 3.96879 9.63066 4.19764 9.08713C4.4265 8.53406 4.59337 7.87133 4.69826 7.09895C4.80315 6.31702 4.8699 5.43974 4.89851 4.46711L4.94947 2.83652H7.83072V10.6033H10.6199V0.590873H2.55274L2.40971 4.58154C2.39064 5.33485 2.33819 5.99281 2.25237 6.55541C2.17609 7.11802 2.03782 7.55666 1.83757 7.87133C1.63732 8.17647 1.34172 8.32904 0.950758 8.32904C0.826795 8.32904 0.698063 8.31474 0.564565 8.28613L0.407227 10.6033C0.645617 10.6605 0.869705 10.7034 1.07949 10.732ZM16.7523 0.590873L12.3325 10.6033H15.2218L16.0025 8.65802H20.2483L21.029 10.6033H23.9755L19.5414 0.590873H16.7523ZM19.4102 6.56972L18.1254 3.36829L16.8406 6.56972H19.4102ZM25.6951 0.590873V10.6033H30.7013C32.0077 10.6033 33.0232 10.322 33.7479 9.75939C34.4726 9.18725 34.835 8.40056 34.835 7.39932C34.835 6.42668 34.5108 5.6829 33.8623 5.16798C33.2234 4.65305 32.2937 4.39559 31.0732 4.39559H28.4842V2.7793H34.0626V0.590873H25.6951ZM30.5153 8.5722H28.4842V6.41238H30.5153C31.488 6.41238 31.9743 6.7652 31.9743 7.47084C31.9743 7.82365 31.8455 8.09542 31.5881 8.28613C31.3402 8.47684 30.9826 8.5722 30.5153 8.5722ZM39.5724 10.4173C40.2495 10.6748 40.9885 10.8035 41.7895 10.8035C42.6 10.8035 43.339 10.6748 44.0065 10.4173C44.6835 10.1599 45.27 9.79753 45.7658 9.33028C46.2617 8.86304 46.6479 8.31474 46.9244 7.68539C47.2105 7.0465 47.3535 6.3504 47.3535 5.59708C47.3535 4.84377 47.2105 4.15243 46.9244 3.52308C46.6479 2.89373 46.2617 2.34543 45.7658 1.87818C45.27 1.4014 44.6835 1.03428 44.0065 0.776818C43.339 0.519356 42.6 0.390625 41.7895 0.390625C40.9885 0.390625 40.2495 0.519356 39.5724 0.776818C38.8954 1.03428 38.3042 1.4014 37.7988 1.87818C37.3029 2.34543 36.9168 2.89373 36.6402 3.52308C36.3637 4.15243 36.2254 4.84377 36.2254 5.59708C36.2254 6.3504 36.3637 7.04173 36.6402 7.67108C36.9168 8.30044 37.3029 8.8535 37.7988 9.33028C38.3042 9.79753 38.8954 10.1599 39.5724 10.4173ZM42.8479 8.25753C42.5237 8.39102 42.1709 8.45777 41.7895 8.45777C41.408 8.45777 41.0505 8.39102 40.7167 8.25753C40.3925 8.12403 40.1064 7.93331 39.8585 7.68539C39.6201 7.42793 39.4294 7.12278 39.2864 6.76997C39.1529 6.41715 39.0861 6.02619 39.0861 5.59708C39.0861 5.15844 39.1529 4.76748 39.2864 4.4242C39.4294 4.07138 39.6201 3.77101 39.8585 3.52308C40.1064 3.26562 40.3925 3.07014 40.7167 2.93664C41.0505 2.80314 41.408 2.73639 41.7895 2.73639C42.1709 2.73639 42.5237 2.80314 42.8479 2.93664C43.1817 3.07014 43.4677 3.26562 43.7061 3.52308C43.9541 3.77101 44.1448 4.07138 44.2783 4.4242C44.4213 4.76748 44.4928 5.15844 44.4928 5.59708C44.4928 6.02619 44.4213 6.41715 44.2783 6.76997C44.1448 7.12278 43.9541 7.42793 43.7061 7.68539C43.4677 7.93331 43.1817 8.12403 42.8479 8.25753ZM54.017 0.590873H49.4399V10.6033H52.272V7.98576H54.017C54.9324 7.98576 55.7191 7.83796 56.3771 7.54235C57.0446 7.23721 57.5595 6.80811 57.9219 6.25504C58.2842 5.70197 58.4654 5.04878 58.4654 4.29547C58.4654 3.53262 58.2842 2.87466 57.9219 2.32159C57.5595 1.75899 57.0446 1.32989 56.3771 1.03428C55.7191 0.738676 54.9324 0.590873 54.017 0.590873ZM52.272 5.75442H53.8454C54.4366 5.75442 54.8752 5.62569 55.1613 5.36823C55.4569 5.11077 55.6047 4.75318 55.6047 4.29547C55.6047 3.82822 55.4569 3.46587 55.1613 3.20841C54.8752 2.95094 54.4366 2.82221 53.8454 2.82221H52.272V5.75442ZM66.0254 0.590873H63.2363L58.8165 10.6033H61.7058L62.4865 8.65802H66.7323L67.513 10.6033H70.4595L66.0254 0.590873ZM65.8942 6.56972L64.6094 3.36829L63.3246 6.56972H65.8942ZM73.8932 2.83652V10.6033H76.6824V2.83652H79.7433V0.590873H70.818V2.83652H73.8932ZM84.1847 10.4173C84.8617 10.6748 85.6007 10.8035 86.4017 10.8035C87.2122 10.8035 87.9513 10.6748 88.6188 10.4173C89.2958 10.1599 89.8822 9.79753 90.3781 9.33028C90.8739 8.86304 91.2601 8.31474 91.5367 7.68539C91.8227 7.0465 91.9658 6.3504 91.9658 5.59708C91.9658 4.84377 91.8227 4.15243 91.5367 3.52308C91.2601 2.89373 90.8739 2.34543 90.3781 1.87818C89.8822 1.4014 89.2958 1.03428 88.6188 0.776818C87.9513 0.519356 87.2122 0.390625 86.4017 0.390625C85.6007 0.390625 84.8617 0.519356 84.1847 0.776818C83.5077 1.03428 82.9164 1.4014 82.4111 1.87818C81.9152 2.34543 81.529 2.89373 81.2525 3.52308C80.9759 4.15243 80.8377 4.84377 80.8377 5.59708C80.8377 6.3504 80.9759 7.04173 81.2525 7.67108C81.529 8.30044 81.9152 8.8535 82.4111 9.33028C82.9164 9.79753 83.5077 10.1599 84.1847 10.4173ZM87.4602 8.25753C87.136 8.39102 86.7831 8.45777 86.4017 8.45777C86.0203 8.45777 85.6627 8.39102 85.329 8.25753C85.0047 8.12403 84.7187 7.93331 84.4707 7.68539C84.2324 7.42793 84.0416 7.12278 83.8986 6.76997C83.7651 6.41715 83.6984 6.02619 83.6984 5.59708C83.6984 5.15844 83.7651 4.76748 83.8986 4.4242C84.0416 4.07138 84.2324 3.77101 84.4707 3.52308C84.7187 3.26562 85.0047 3.07014 85.329 2.93664C85.6627 2.80314 86.0203 2.73639 86.4017 2.73639C86.7831 2.73639 87.136 2.80314 87.4602 2.93664C87.7939 3.07014 88.08 3.26562 88.3184 3.52308C88.5663 3.77101 88.757 4.07138 88.8905 4.4242C89.0336 4.76748 89.1051 5.15844 89.1051 5.59708C89.1051 6.02619 89.0336 6.41715 88.8905 6.76997C88.757 7.12278 88.5663 7.42793 88.3184 7.68539C88.08 7.93331 87.7939 8.12403 87.4602 8.25753ZM98.6293 0.590873H94.0522V10.6033H96.8843V7.98576H98.6293C99.5447 7.98576 100.331 7.83796 100.989 7.54235C101.657 7.23721 102.172 6.80811 102.534 6.25504C102.896 5.70197 103.078 5.04878 103.078 4.29547C103.078 3.53262 102.896 2.87466 102.534 2.32159C102.172 1.75899 101.657 1.32989 100.989 1.03428C100.331 0.738676 99.5447 0.590873 98.6293 0.590873ZM96.8843 5.75442H98.4576C99.0488 5.75442 99.4875 5.62569 99.7736 5.36823C100.069 5.11077 100.217 4.75318 100.217 4.29547C100.217 3.82822 100.069 3.46587 99.7736 3.20841C99.4875 2.95094 99.0488 2.82221 98.4576 2.82221H96.8843V5.75442ZM107.722 0.590873H104.933V10.6033H107.608L111.727 4.73888V10.6033H114.516V0.590873H111.856L107.722 6.46959V0.590873ZM122.831 8.08588V10.6033H125.62V0.590873H121.115C120.209 0.590873 119.417 0.743443 118.74 1.04858C118.073 1.35372 117.553 1.79236 117.181 2.3645C116.819 2.9271 116.638 3.60413 116.638 4.39559C116.638 5.15844 116.809 5.8164 117.152 6.36947C117.505 6.92254 118.006 7.34687 118.654 7.64248C118.669 7.64938 118.685 7.65621 118.7 7.66295L116.666 10.6033H119.641L121.293 8.08588H122.831ZM122.831 5.89746V2.82221H121.172C120.619 2.82221 120.199 2.95094 119.913 3.20841C119.636 3.45633 119.498 3.83776 119.498 4.35268C119.498 4.85807 119.636 5.24426 119.913 5.51126C120.199 5.76872 120.609 5.89746 121.143 5.89746H122.831Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div class="menu__links">
                <div class="menu__burger">
                  <img
                    src="@/assets/images/mainblock/burger.png"
                    alt="menu"
                    @click="checked()"
                    class="switcher"
                  />
                </div>
              </div>
            </nav>
          </header>

          <div class="section__links" ref="menuList">
            <ul class="menu__list">
              <span class="section__links-line"></span>
              <li class="section__links-item">
                <a
                  class="link"
                  target="_blank"
                  href="https://habr.com/ru/companies/psb/articles/"
                  >Хабр</a
                >
              </li>
              <li class="section__links-item">
                <a
                  class="link"
                  target="_blank"
                  href="https://rutube.ru/plst/232091/"
                  >Rutube</a
                >
              </li>
              <li class="section__links-item">
                <a class="link" target="_blank" href="https://t.me/psb_it_team"
                  >Телеграм</a
                >
              </li>
              <li class="section__links-item">
                <a
                  class="link"
                  target="_blank"
                  href="https://360.yandex.ru/mail/"
                  >Почта</a
                >
              </li>
            </ul>
          </div>
        </div>

        <template v-if="showContent">
          <!--  <section class="section__text-psb">
            <p class="section__title-psb" v-show="titlePsb">ПСБ цифровая</p>
            <div class="section__counter-psb" ref="psbNode">
              {{ counterPsb }}
            </div>
          </section> -->
          <section class="section__text-psb">
            <div class="section__title-psb">
              {{ counterPsb }}
            </div>
          </section>
          <!--   <section class="section__text-lab">
            <p class="section__title-lab" v-show="titleLab">лаборатория</p>
            <div class="section__counter-lab" ref="labNode">
              {{ counterLab }}
            </div>
          </section> -->
          <section class="section__text-lab">
            <div class="section__title-lab">
              {{ counterLab }}
            </div>
          </section>
        </template>
        <p class="section__sub-title-lab" v-if="showSubTitle">
          Cоздавай будущее с нами
        </p>
        <div class="substrate" v-if="showBlur" @click="close()"></div>
      </div>
    </div>
  </div>

  <div class="video__section" v-show="showVideo">
    <video
      ref="videoPlayer"
      class="videoPlayer"
      autoplay
      muted
      playsinline
      loop="loop"
      poster="../assets/images/mainblock/poster_1.png"
    >
      <source :src="videoSrc" type="video/mp4" />
    </video>
    <div class="wrapper">
      <h1 class="wrapper__title">Давай знакомиться</h1>
      <div class="wrapper__content">
        <button
          class="wrapper__about"
          @mouseover="changeVideoSource('about')"
          @click.stop="scrollTo('aboutUs')"
        >
          О нас
        </button>
        <button
          class="wrapper__projects"
          @mouseover="changeVideoSource('projects')"
          @click.stop="scrollTo('stack')"
        >
          Проекты и стек
        </button>
        <button
          class="wrapper__office"
          @mouseover="changeVideoSource('office')"
          @click.stop="scrollTo('offices')"
        >
          Офисы
        </button>
        <button
          class="wrapper__work"
          @mouseover="changeVideoSource('working')"
          @click.stop="scrollTo('work')"
        >
          Работа с нами
        </button>
        <button
          class="wrapper__life"
          @mouseover="changeVideoSource('life')"
          @click.stop="scrollTo('life')"
        >
          Жизнь вне офиса
        </button>
        <button
          class="wrapper__develop"
          @mouseover="changeVideoSource('develop')"
          @click.stop="scrollTo('education')"
        >
          Развитие
        </button>
      </div>
      <button class="wrapper__arrow"></button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const { shuffle } = require("txt-shuffle");

const videoSrc = ref("");
const videoPlayer = ref(null);
const videoSources = ref({
  about: "about.mp4",
  projects: "projects.mp4",
  office: "office.mp4",
  working: "working.mp4",
  life: "life.mp4",
  develop: "develop.mp4",
});

const showBlur = ref(false);
const menuList = ref(null);
const showNavbar = ref(false);
const showContent = ref(false);
const showSubTitle = ref(false);
const showVideo = ref(false);
const counterPsb = ref(null);
// const psbNode = ref(null);
// const labNode = ref(null);
const gradientGroup = ref(null);
const counterLab = ref(null);
// const titlePsb = ref(false);
// const titleLab = ref(false);
const loadingTime = ref(800);
// let clientWidth = ref(document.documentElement.clientWidth);

const scrollTo = (value) => {
  let element;
  let offsetElement;
  switch (value) {
    case "life":
      element = document.querySelector(".life_header");
      offsetElement = element.getBoundingClientRect().top;
      break;
    case "offices":
      element = document.querySelector(".map-offices");
      offsetElement = element.getBoundingClientRect().top;
      break;
    case "work":
      element = document.querySelector(".process_item.process_item_video");
      offsetElement = element.getBoundingClientRect().top;
      break;
    case "stack":
      element = document.querySelector(".which-stack-to-use__title");
      offsetElement = element.getBoundingClientRect().top;
      break;
    case "education":
      element = document.querySelector(".education__heading");
      offsetElement = element.getBoundingClientRect().top;
      break;
    case "aboutUs":
      element = document.querySelector(".specialists__number");
      offsetElement = element.getBoundingClientRect().top;
      break;
  }
  let scrollToElement = offsetElement + window.scrollY;
  window.scrollTo({
    top: scrollToElement,
    behavior: "smooth",
  });
};

shuffle({
  text: "ПСБ цифровая",
  duration: 5,
  fps: 40,
  glyphs: "abcdefhiklmnorstuvwxz0123456789",
  animation: "show",
  direction: "right",
  onUpdate: (output) => {
    counterPsb.value = output;
  },
});

shuffle({
  text: "лаборатория",
  duration: 5,
  fps: 40,
  glyphs: "abcdefhiklmnorstuvwxz0123456789",
  animation: "show",
  delay: 0.2,
  direction: "right",
  onUpdate: (output) => {
    counterLab.value = output;
  },
});

const changeVideoSource = (chapter) => {
  const source = videoSources.value[chapter];
  videoPlayer.value.pause();
  if (source) {
    videoSrc.value = require(`@/assets/video/${source}`);
    videoPlayer.value.load();
  }
};

const checked = () => {
  menuList.value.classList.add("section__links_active");
  showBlur.value = true;
};

const close = () => {
  menuList.value.classList.remove("section__links_active");
  showBlur.value = false;
};

/* const generatePsb = () => {
  let counterInterval = setInterval(() => {
    const characters = "abcdefhiklmnorstuvwxz0123456789";
    let counter = "";
    let length = 0;
    clientWidth.value < 1920 ? (length = 11) : (length = 15);
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      counter += characters.charAt(randomIndex);
    }
    counterPsb.value = counter;
  }, 70);

  setTimeout(() => {
    titlePsb.value = true;
    psbNode.value.classList.add("section__counter-psb_active");
  }, 2000);

  setTimeout(() => {
    clearInterval(counterInterval);
    psbNode.value.remove();
  }, 4000);
}; */

const generateLab = (ms) => {
  // let counterInterval = setInterval(() => {
  //   const characters = "abcdefhiklmnorstuvwxz0123456789";
  //   let counter = "";
  //   let length = 0;
  //   clientWidth.value < 1920 ? (length = 11) : (length = 12);
  //   for (let i = 0; i < length; i++) {
  //     const randomIndex = Math.floor(Math.random() * characters.length);
  //     counter += characters.charAt(randomIndex);
  //   }
  //   counterLab.value = counter;
  // }, 70);

  setTimeout(() => {
    // titleLab.value = true;
    showSubTitle.value = true;
    showVideo.value = true;
    // labNode.value.classList.add("section__counter-lab_active");
  }, 2000 + ms);

  // setTimeout(() => {
  //   clearInterval(counterInterval);
  //   labNode.value.remove();
  // }, 5000);
};

const contentLoad = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const intersectionAnimation = () => {
  let title = document.querySelector(".wrapper__title");
  let content = document.querySelector(".wrapper__content");
  let arrow = document.querySelector(".wrapper__arrow");
  title.style.opacity = content.style.opacity = arrow.style.opacity = "0";
  let options = {
    threshold: [0.2, 0.5, 0.6, 0.7, 0.8],
  };
  let opacity = [1, 0.6, 0.3, 0.2];
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const { target, isIntersecting, intersectionRatio } = entry;
      let array = options.threshold;
      if (
        isIntersecting &&
        intersectionRatio > 0.7 &&
        scrolledUp.value === false
      ) {
        target.classList.add("transformVideo");
        gradientGroup.value.style.opacity = "0.1";
        title.style.opacity = content.style.opacity = arrow.style.opacity = "1";
      }
      if (
        isIntersecting &&
        intersectionRatio > 0.5 &&
        scrolledUp.value === true
      ) {
        target.classList.remove("transformVideo");
        title.style.opacity = content.style.opacity = arrow.style.opacity = "0";
        // observer.unobserve(videoPlayer.value);
      }
      for (let i = 0; i < array.length - 1; i++) {
        if (intersectionRatio > array[i] && intersectionRatio < array[i + 1]) {
          if (!target.classList.contains("transformVideo")) {
            gradientGroup.value.style.opacity = opacity[i];
            gradientGroup.value.style.transition = "all 200ms ease-out";
          }
        }
      }
    });
  }, options);

  let lastScrollPos = 0;
  let scrolledUp = ref(false);
  window.addEventListener("scroll", () => {
    const currentScrollPos = window.scrollY;
    scrolledUp.value = false;
    if (currentScrollPos > lastScrollPos) {
      // Прокрутка вниз
    } else {
      // Прокрутка вверх (или без изменений)
      gradientGroup.value.style.opacity = "1";
      scrolledUp.value = true;
    }
    observer.observe(videoPlayer.value);
    lastScrollPos = currentScrollPos;
  });
};

onMounted(async () => {
  videoSrc.value = require("@/assets/video/meet.mp4");
  videoPlayer.value.load();

  showNavbar.value = true;
  await contentLoad(loadingTime.value);
  showContent.value = true;

  // generatePsb();
  let delay = 450;
  setTimeout(() => {
    generateLab(delay);
  }, delay);

  intersectionAnimation();
});
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.6) 58.51%
  );
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @include mq(768) {
    // width: 68.8rem;
    top: 5rem;
  }
  // @include mq(1440) {
  //   width: 120rem;
  // }

  &__arrow {
    animation: moveButton 2s linear infinite;
  }

  &__title {
    color: var(--color-white);
    font-size: 4.8rem;
    font-weight: 500;
    line-height: 90%;
    letter-spacing: -0.288rem;
    padding-bottom: 3rem;
    text-align: center;
    transition: opacity 2s ease;
    @include mq(768) {
      font-size: 9.6rem;
      letter-spacing: -0.576rem;
      padding-bottom: 6rem;
    }
    @include mq(1024) {
      width: 54rem;
    }
    @include mq(1440) {
      width: 83.8rem;
      font-size: 15rem;
      letter-spacing: -0.9rem;
    }
  }

  &__content {
    display: grid;
    width: 33.5rem;
    grid-template-columns: 17.7rem auto;
    grid-template-rows: 1fr 1fr 1fr;
    height: 17.6rem;
    margin-bottom: 11rem;
    transition: opacity 3s ease;
    @include mq(768) {
      width: 62.6rem;
      grid-template-columns: repeat(3, auto);
      grid-template-rows: 1fr 1fr;
      // height: 19.4rem;
      height: 22rem;
      margin: 0 auto 19.5rem;
      grid-template-areas:
        "about projects work"
        "office life develop";
    }
    @include mq(1440) {
      grid-row-gap: 1.6rem;
      width: auto;
      height: auto;
      margin-bottom: 9rem;
      grid-template-columns: repeat(4, auto);
      grid-template-rows: 1fr 1fr;
      grid-template-areas:
        "about projects work office"
        ". life develop .";
    }

    > button {
      border-radius: 16rem;
      border: 0.2rem solid rgba(255, 255, 255, 0.2);
      background: rgba(255, 255, 255, 0.01);
      backdrop-filter: blur(0.3rem); /* Стандартное свойство backdrop-filter */
      -webkit-backdrop-filter: blur(
        0.3rem
      ); /* Префикс для браузеров на движке WebKit */
      padding: 1.5rem;
      font-size: 1.8rem;
      line-height: 120%;
      letter-spacing: -0.036rem;
      color: var(--color-white);
      transition: 0.2s;
      &:hover {
        background: #424ed1;
        cursor: pointer;
        border: none;
        outline: none;
      }

      @include mq(768) {
        font-size: 2.4rem;
        line-height: 120%;
        letter-spacing: -0.048rem;
        padding: 3rem;
      }
      @include mq(1440) {
        font-size: 3.2rem;
        line-height: 120%;
        letter-spacing: -0.096rem;
        padding: 4rem 6rem;
      }
    }
  }

  &__about {
    height: 5.2rem;
    justify-self: center;
    @include mq(768) {
      height: 9rem;
      grid-area: about;
      justify-self: start;
    }
    @include mq(1440) {
      height: 11.8rem;
      width: 20.5rem;
    }
  }

  &__projects {
    min-width: 16.2rem;
    height: 5.2rem;
    position: relative;
    left: -3.9rem;
    @include mq(768) {
      left: 0.3rem;
      height: 9rem;
      width: 23.6rem;
      grid-area: projects;
    }
    @include mq(1440) {
      height: 11.8rem;
      width: 35rem;
      left: 1.4rem;
    }
  }

  &__office {
    justify-self: center;
    height: 5.2rem;
    @include mq(768) {
      height: 9rem;
      grid-area: office;
    }
    @include mq(1440) {
      justify-self: end;
      height: 11.8rem;
    }
  }

  &__work {
    height: 5.2rem;
    position: relative;
    left: -3.3rem;
    @include mq(768) {
      height: 9rem;
      position: static;
      width: 22.3rem;
      grid-area: work;
    }
    @include mq(1440) {
      height: 11.8rem;
      width: 33.3rem;
    }
  }

  &__life {
    min-width: 18rem;
    height: 5.2rem;
    position: relative;
    left: 1.6rem;
    @include mq(768) {
      left: 2rem;
      height: 9rem;
      width: 26rem;
      grid-area: life;
    }
    @include mq(1440) {
      left: 0;
      justify-self: center;
      height: 11.8rem;
      width: 38rem;
    }
  }

  &__develop {
    height: 5.2rem;
    justify-self: center;
    @include mq(768) {
      position: relative;
      left: 1rem;
      height: 9rem;
      padding: 3rem;
      grid-area: develop;
    }
    @include mq(1440) {
      position: relative;
      left: -2.7rem;
      height: 11.8rem;
    }
  }

  &__arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    margin: 0 auto;
    border: none;
    border-radius: 5rem;
    background-color: rgba(255, 255, 255, 0.2);
    background-image: url("../assets/images/mainblock/ArrowDown.png");
    background-position: center center;
    background-repeat: no-repeat;
    transition: opacity 4s ease;
    @include mq(768) {
      width: 54px;
      height: 54px;
      background-size: 18px;
    }
    @include mq(1440) {
      width: 64px;
      height: 64px;
      background-size: 21px;
    }
    @include mq(1920) {
      width: 76px;
      height: 76px;
      background-size: 25px;
    }
  }
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  // animation: slideInFromTop 1200ms ease-out forwards;
  opacity: 0;
  animation: opacityShow 800ms ease-out forwards;
  width: 33.5rem;

  @include mq(425) {
    // width: auto;
    width: 33.1rem;
  }
  @include mq(475) {
    // width: auto;
    width: 32.8rem;
  }
  @include mq(490) {
    width: 32.6rem;
  }
  @include mq(560) {
    width: 32.4rem;
  }
  @include mq(620) {
    width: 32.2rem;
  }
  @include mq(660) {
    width: 32rem;
  }
  @include mq(768) {
    width: auto;
  }

  &__container {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(3, auto);
    align-items: center;
    grid-gap: 0.3rem;

    @include mq(1440) {
      grid-gap: 0;
    }

    @include mq(1920) {
      grid-gap: 0.3rem;
    }
  }
}

.container__main {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
}

.section {
  &__text-psb {
    position: relative;
    padding: 7rem 0 0;
    color: var(--color-white);
    // margin: 0 auto;
    overflow: hidden;
    // letter-spacing: -2.88px;
    margin: 0 auto;
    padding-bottom: 5px; //

    @include mq(375) {
      // width: 31rem;
      // height: 11.3rem;
    }

    @include mq(768) {
      width: 62rem;
      height: 21.2rem;
      padding: 12.5rem 0 0;
    }

    @include mq(1440) {
      width: 96.8rem;
      padding: 8rem 0 0;
    }

    /*   @include mq(1920) {
      width: 128.8rem;
      padding: 10.6rem 0 0;
      height: 28.7rem;
    } */
  }

  &__counter-psb {
    position: absolute;
    left: 0;
    opacity: 0.6;
    top: 8.4rem;
    font-size: 4.8rem;
    animation: startFeading_psb 1100ms ease-out forwards;
    @include mq(768) {
      width: 61.5rem;
      font-size: 9.6rem;
      top: 15.9rem;
    }
    @include mq(1440) {
      width: 96.8rem;
      font-size: 15rem;
      top: 13.4rem;
    }
    /*   @include mq(1920) {
      width: 129rem;
      top: 20rem;
    } */
  }

  /*  375 425 768px 960 992px 1200px 1400px 1440  1600  1920 2056*/
  &__counter-psb_active {
    position: relative;
    right: 0;
    left: auto;

    @include mq(375) {
      top: -3rem;
      animation: animateToRight_375 2.5s ease-out forwards;
    }
    @include mq(425) {
      top: -3rem;
    }
    @include mq(768) {
      top: -5.3rem;
      animation: animateToRight_768 3.1s ease-out forwards;
    }
    @include mq(1024) {
      animation: animateToRight_1024 5s ease-out forwards;
    }
    @include mq(1440) {
      top: -8rem;
      animation: animateToRight_1024 3.1s ease-out forwards;
    }
    /*  @include mq(1600) {
    } */
    @include mq(1920) {
      top: -8.5rem;
      animation: animateToRight_1920 2.5s ease-out forwards;
    }
  }

  &__title-psb {
    // font-size: 4.8rem;
    font-size: 4.7rem;
    line-height: 90%;
    // letter-spacing: -0.288rem;
    // text-align: center;
    white-space: nowrap;
    // overflow: hidden;

    // margin: 0;
    // animation: fadeInText 2100ms ease-out forwards;

    @include mq(425) {
      font-size: 4.6rem;
    }
    @include mq(590) {
      font-size: 4.58rem;
    }
    @include mq(660) {
      font-size: 4.54rem;
    }
    @include mq(768) {
      font-size: 9.6rem;
      letter-spacing: -0.576rem;
    }

    @include mq(1440) {
      font-size: 15rem;
      line-height: 90%;
      letter-spacing: -0.9rem;
    }

    /*     @include mq(1920) {
      font-size: 20rem;
      line-height: 90%;
      letter-spacing: -1.2rem;
    } */
  }

  &__text-lab {
    position: relative;
    color: var(--color-white);
    margin: 0 auto;
    overflow: hidden;

    @include mq(375) {
      height: 4.4rem;
      // width: 27rem;
      width: 29.7rem;
    }
    @include mq(768) {
      height: 8.6rem;
      width: 54rem;
    }
    @include mq(1024) {
      height: 8.9rem;
    }
    @include mq(1440) {
      height: 13.6rem;
      width: 84.6rem;
    }
    /*     @include mq(1920) {
      height: 18rem;
      width: 112.6rem;
    } */
  }

  &__counter-lab {
    position: absolute;
    left: 0;
    opacity: 0.6;
    animation: startFeading_lab 1100ms ease-out forwards;
    top: 1.4rem;
    font-size: 4.8rem;
    @include mq(768) {
      width: 54rem;
      top: 3.4rem;
      font-size: 9.6rem;
    }
    @include mq(1440) {
      width: 84.6rem;
      font-size: 15rem;
      top: 5.4rem;
    }
    /*   @include mq(1920) {
      width: 112.7rem;
      font-size: 15rem;
      top: 9.4rem;
    } */
  }
  /*  375 425 768px 960 992px 1200px 1400px 1440  1600  1920 2056*/
  &__counter-lab_active {
    position: relative;
    right: 0;
    left: auto;
    @include mq(375) {
      top: -3rem;
      animation: animateToRight_375 2.9s ease-out forwards;
    }
    @include mq(768) {
      top: -5.4rem;
      animation: animateToRight_768 3.5s ease-out forwards;
    }
    @include mq(1024) {
      animation: animateToRight_1024 5.7s ease-out forwards;
    }
    @include mq(1440) {
      top: -8rem;
      animation: animateToRight_1024 3.5s ease-out forwards;
    }
    @include mq(1920) {
      top: -9rem;
      animation: animateToRight_1920 2.9s ease-out forwards;
    }
  }

  &__title-lab {
    font-size: 4.8rem;
    line-height: 90%;
    // letter-spacing: -0.288rem;
    // text-align: center;
    white-space: nowrap;
    // overflow: hidden;
    // margin: 0;
    // animation: fadeInText 2100ms ease-out forwards;

    @include mq(768) {
      font-size: 9.6rem;
      letter-spacing: -0.576rem;
    }

    @include mq(1440) {
      font-size: 15rem;
      line-height: 90%;
      letter-spacing: -0.9rem;
    }

    /*    @include mq(1920) {
      font-size: 20rem;
      line-height: 90%;
      letter-spacing: -1.2rem;
    } */
  }

  &__sub-title-lab {
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 6rem;
    font-size: 1.8rem;
    line-height: 120%;
    letter-spacing: -0.036rem;
    opacity: 0.6;
    color: var(--color-white);

    @include mq(768) {
      padding-top: 3rem;
      font-size: 2.4rem;
      letter-spacing: -0.048rem;
      padding-bottom: 9rem;
    }

    @include mq(1440) {
      font-size: 3.2rem;
      letter-spacing: -0.096rem;
      padding-bottom: 11rem;
    }

    @include mq(1920) {
      padding-top: 5rem;
      /*  font-size: 4.2rem;
      letter-spacing: -0.128rem;
      padding-bottom: 14.5rem; */
    }
  }

  &__links {
    position: fixed;
    z-index: 2;
    bottom: -80rem;
    left: 0;
    background: #fff;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    transition: all 1s ease-out;

    @include mq(375) {
      width: 100%;
    }

    @include mq(768) {
      position: static;
      width: auto;
      background: none;
    }

    &_active {
      bottom: 0;
    }

    &-item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 29.5rem;
      border-radius: 2rem;
      border: 1px solid rgba(0, 0, 0, 0.2);
      padding: 1.5rem 2rem;
      margin: 2rem auto 2rem;
      text-align: center;
      cursor: pointer;
      opacity: 0;
      animation: opacityShow 800ms ease-out forwards;

      &:hover {
        background: #fff;

        .link {
          color: #13144b;
          font-weight: 400;
          border: none;
          outline: none;
        }
      }

      &:nth-child(2) {
        animation-delay: 500ms;
      }

      &:nth-child(3) {
        animation-delay: 600ms;
      }

      &:nth-child(4) {
        animation-delay: 700ms;
      }

      &:nth-child(5) {
        animation-delay: 800ms;
      }

      @include mq(768) {
        width: auto;
        background: none;
        border: 0.1rem solid rgba(255, 255, 255, 0.2);
        padding: 1rem 2rem;
        margin: 0;
      }

      @include mq(1920) {
        border-radius: 2.7rem;
      }

      &:last-child {
        margin-bottom: 6rem;

        @include mq(768) {
          margin: 0;
        }
      }

      > .link {
        line-height: 120%;
        letter-spacing: -0.048rem;
        color: #3a3a54;

        @include mq(768) {
          color: var(--color-white);
        }

        @include mq(1440) {
          line-height: 120%;
          letter-spacing: -0.064rem;
        }

        /*      @include mq(1920) {
          line-height: 140%;
          font-size: 2.1rem;
          letter-spacing: -0.0853rem;
        } */
      }
    }

    &-line {
      display: block;
      width: 5.4rem;
      height: 0.6rem;
      border-radius: 3rem;
      background: #d9d9d9;
      margin: 1.5rem auto 0;

      @include mq(768) {
        display: none;
      }
    }
  }
}

.menu {
  &__list {
    padding: 0;
    @include mq(768) {
      display: grid;
      grid-template-columns: repeat(4, auto);
      align-content: start;
      grid-column-gap: 1rem;
    }

    /*   @include mq(1920) {
      grid-column-gap: 1.3rem;
    } */
  }
}

.main__flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  @include mq(425) {
    flex-direction: column;
    justify-content: center;
  }
  @include mq(768) {
    flex-direction: row;
    justify-content: space-between;
    width: 68.8rem;
  }
  @include mq(1440) {
    width: 128rem;
  }
}

.video__section {
  margin-top: -48.1rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: slideInVideo 1s ease-out forwards;

  @include mq(425) {
    margin-top: -48.6rem;
  }
  @include mq(768) {
    margin-top: -50.4rem;
  }

  @include mq(1024) {
    margin-top: -37.7rem;
  }
  @include mq(1440) {
    margin-top: -28.1rem;
  }

  /*   @include mq(1920) {
    margin-top: -39.1rem;
  } */

  video {
    object-fit: cover;
    width: 33.5rem;
    height: 50rem;
    border-radius: 4rem;

    @include mq(390) {
      width: 34.9rem;
    }

    @include mq(768) {
      width: 68.8rem;
      height: 77.4rem;
      border-radius: 5rem;
    }

    @include mq(1440) {
      width: 128rem;
      height: 70rem;
    }
  }
}

header {
  margin: 0 auto;
  @include mq(768) {
    margin: 0;
  }
}

.main {
  @include mq(375) {
    padding: 4rem 2rem;
  }

  @include mq(768) {
    padding: 2rem 4rem 0;
  }

  @include mq(1024) {
    padding: 2rem 16.6rem 0;
  }

  @include mq(1440) {
    padding: 4rem 8rem 0;
  }
}

.switcher {
  display: block;
  height: 3.6rem;

  @include mq(768) {
    display: none;
  }
}

.substrate {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  background: rgba(24, 24, 34, 0.4);
  backdrop-filter: blur(0.5rem);
}

.gradient-group {
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  width: 100%;

  @include mq(375) {
    height: 81.2rem;
  }

  @include mq(768) {
    height: 102.4rem;
  }

  @include mq(1024) {
    height: 90rem;
    // position: static;
  }

  /*   @include mq(1920) {
    height: 120rem;
  } */
}

.gradient-group .blue {
  background-color: #733ff5;
  position: absolute;
  top: 0;
  left: 0;
  height: 300rem;
  width: 300rem;
  margin: 0 auto;
  animation: gradientBlue 1.5s ease forwards;
}

.gradient-group .purple {
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgb(143, 20, 186) 0%,
    rgba(143, 20, 186, 0.99) 11.79%,
    rgba(143, 20, 186, 0.97) 21.38%,
    rgba(143, 20, 186, 0.93) 29.12%,
    rgba(143, 20, 186, 0.88) 35.34%,
    rgba(143, 20, 186, 0.82) 40.37%,
    rgba(143, 20, 186, 0.75) 44.56%,
    rgba(143, 20, 186, 0.67) 48.24%,
    rgba(143, 20, 186, 0.59) 51.76%,
    rgba(143, 20, 186, 0.5) 55.44%,
    rgba(143, 20, 186, 0.41) 59.63%,
    rgba(143, 20, 186, 0.33) 64.66%,
    rgba(143, 20, 186, 0.24) 70.88%,
    rgba(143, 20, 186, 0.15) 78.62%,
    rgba(143, 20, 186, 0.07) 88.21%,
    rgba(143, 20, 186, 0) 100%
  );
  border-radius: 13rem;
  position: absolute;

  @include mq(375) {
    height: 130rem;
    width: 130rem;
    top: -40rem;
    left: -40rem;
    animation: slideInGradient 1.5s ease forwards,
      gradientPurple_375 8s ease infinite;
  }

  @include mq(768) {
    height: 160rem;
    width: 160rem;
    top: -40rem;
    left: -35rem;
    animation: slideInGradient 1.5s ease forwards,
      gradientPurple_768 8s ease infinite;
  }

  @include mq(1024) {
    height: 200rem;
    width: 200rem;
    top: -70rem;
    left: -35rem;
    animation: slideInGradient 1.5s ease forwards,
      gradientPurple_1024 8s ease infinite;
  }

  @include mq(1440) {
    height: 250rem;
    width: 250rem;
    top: -80rem;
    left: -50rem;
    animation: slideInGradient 1.5s ease forwards,
      gradientPurple_1440 8s ease infinite;
  }

  @include mq(1920) {
    height: 300rem;
    width: 300rem;
    top: -80rem;
    left: -30rem;
    animation: slideInGradient 1.5s ease forwards,
      gradientPurple_1920 8s ease infinite;
  }

  @include mq(2560) {
    top: -110rem;
    left: -60rem;
    animation: slideInGradient 1.5s ease forwards,
      gradientPurple_2560 8s ease infinite;
  }
}

.gradient-group .red {
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgb(255, 80, 48) 0%,
    rgba(254.66, 79.88, 48.43, 0.99) 11.3%,
    rgba(253.67, 79.55, 49.67, 0.97) 21.16%,
    rgba(252.1, 79.01, 51.63, 0.93) 29.76%,
    rgba(250.01, 78.3, 54.24, 0.89) 37.27%,
    rgba(247.46, 77.43, 57.42, 0.83) 43.87%,
    rgba(244.53, 76.43, 61.09, 0.76) 49.76%,
    rgba(241.26, 75.32, 65.17, 0.69) 55.1%,
    rgba(237.73, 74.11, 69.58, 0.61) 60.08%,
    rgba(234.01, 72.84, 74.24, 0.52) 64.88%,
    rgba(230.14, 71.53, 79.07, 0.44) 69.68%,
    rgba(226.21, 70.18, 83.99, 0.35) 74.66%,
    rgba(222.26, 68.84, 88.92, 0.26) 80%,
    rgba(218.37, 67.51, 93.79, 0.17) 85.88%,
    rgba(214.59, 66.22, 98.51, 0.08) 92.49%,
    rgba(211, 65, 103, 0) 100%
  );
  border-radius: 13rem;
  position: absolute;

  @include mq(375) {
    width: 85rem;
    height: 85rem;
    top: -25rem;
    left: -15rem;
    animation: slideInGradient 1.5s ease forwards,
      gradientRed_375 8s ease infinite;
  }

  @include mq(768) {
    width: 110rem;
    height: 110rem;
    top: -30rem;
    left: 5rem;
    animation: slideInGradient 1.5s ease forwards,
      gradientRed_768 8s ease infinite;
  }

  @include mq(1024) {
    width: 150rem;
    height: 150rem;
    top: -35rem;
    left: 0;
    animation: slideInGradient 1.5s ease forwards,
      gradientRed_1024 8s ease infinite;
  }

  @include mq(1440) {
    top: -45rem;
    left: 35rem;
    animation: slideInGradient 1.5s ease forwards,
      gradientRed_1440 8s ease infinite;
  }

  @include mq(1920) {
    width: 240rem;
    height: 240rem;
    top: -60rem;
    left: 10rem;
    animation: slideInGradient 1.5s ease forwards,
      gradientRed_1920 8s ease infinite;
  }

  @include mq(2560) {
    top: -70rem;
    left: 80rem;
    animation: slideInGradient 1.5s ease forwards,
      gradientRed_2560 8s ease infinite;
  }
}

.gradient-group .yellow {
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgb(255, 168, 72) 0%,
    rgba(255, 167.23, 71.79, 0.99) 11.31%,
    rgba(255, 165.19, 71.23, 0.97) 21.19%,
    rgba(255, 162, 70.36, 0.93) 29.81%,
    rgba(255, 157.8, 69.22, 0.88) 37.35%,
    rgba(255, 152.71, 67.83, 0.83) 44%,
    rgba(255, 146.84, 66.23, 0.76) 49.92%,
    rgba(255, 140.33, 64.45, 0.69) 55.29%,
    rgba(255, 133.3, 62.54, 0.61) 60.3%,
    rgba(255, 125.88, 60.51, 0.52) 65.12%,
    rgba(255, 118.18, 58.41, 0.43) 69.92%,
    rgba(255, 110.34, 56.27, 0.34) 74.89%,
    rgba(255, 102.47, 54.13, 0.26) 80.21%,
    rgba(255, 94.71, 52.01, 0.17) 86.05%,
    rgba(255, 87.18, 49.96, 0.08) 92.59%,
    rgba(255, 80, 48, 0) 100%
  );
  border-radius: 13rem;
  position: absolute;

  @include mq(375) {
    width: 40rem;
    height: 40rem;
    top: 40rem;
    left: 18rem;
    animation: slideInGradient 1.5s ease forwards,
      gradientYellow_375 8s ease infinite;
  }

  @include mq(768) {
    width: 70rem;
    height: 70rem;
    top: 45rem;
    left: 35rem;
    animation: slideInGradient 1.5s ease forwards,
      gradientYellow_768 8s ease infinite;
  }

  @include mq(1024) {
    width: 80rem;
    height: 80rem;
    top: 35rem;
    left: 55rem;
    animation: slideInGradient 1.5s ease forwards,
      gradientYellow_1024 8s ease infinite;
  }

  @include mq(1440) {
    width: 100rem;
    height: 100rem;
    top: 20rem;
    left: 95rem;
    animation: slideInGradient 1.5s ease forwards,
      gradientYellow_1440 8s ease infinite;
  }

  @include mq(1920) {
    width: 150rem;
    height: 150rem;
    top: 30rem;
    left: 100rem;
    animation: slideInGradient 1.5s ease forwards,
      gradientYellow_1920 8s ease infinite;
  }

  @include mq(2560) {
    top: 30rem;
    left: 170rem;
    animation: slideInGradient 1.5s ease forwards,
      gradientYellow_2560 8s ease infinite;
  }
}

.transformVideo {
  transform: scale(1.2, 1.2);
  height: 110vh !important;
  width: 110vw !important;
}

.videoPlayer {
  transition: all 0.8s ease-out;
}
</style>
