<template>
  <div class="container__main">
    <div class="gradient-group" ref="gradientGroup">
      <div class="blue"></div>
      <div class="purple"></div>
      <div class="red"></div>
      <div class="yellow"></div>
    </div>
    <div class="main">
      <div class="main__flex">
        <header>
          <nav class="navbar">
            <div class="navbar__container">
              <img src="@/assets/images/mainblock/logo_1.svg" alt="logo" />
              <svg
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
                  d="M15.9091 8.37388C14.139 8.37388 13.1696 7.11596 13.1696 5.52259C13.1696 4.26467 13.8861 2.6713 15.8669 2.6713C17.0891 2.6713 17.8899 3.42605 18.1849 3.7615L19.7864 2.16813C18.8171 1.036 17.3841 0.28125 15.7405 0.28125C12.8325 0.28125 10.5566 2.41972 10.5566 5.52259C10.5566 8.41581 12.8325 10.7639 15.7405 10.7639C17.4684 10.7639 19.0278 9.92532 19.955 8.62546L18.3535 7.03209C17.8477 7.78685 17.0048 8.37388 15.9091 8.37388Z"
                  fill="white"
                />
              </svg>
              <img src="@/assets/images/mainblock/logo_2.svg" alt="logo" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="95"
                height="12"
                viewBox="0 0 95 12"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.0686 11.9809H8.47971V10.8985H6.90633H0.269531V0.886076H3.0587V8.65285H6.90633V0.886076H9.69551V8.65285H11.0686V11.9809ZM12.9801 0.886076V10.8985H15.6548L19.7742 5.03408V10.8985H22.5634V0.886076H19.9029L15.7692 6.7648V0.886076H12.9801ZM32.4086 10.2769V11.3705H29.8197V10.2649C28.8994 10.2001 28.0937 10.0394 27.4024 9.78283C26.487 9.43954 25.7909 8.93892 25.3141 8.28096C24.8469 7.61347 24.6132 6.80771 24.6132 5.86368C24.6132 4.91012 24.8469 4.10435 25.3141 3.4464C25.7909 2.7789 26.4917 2.27351 27.4167 1.93023C28.1044 1.67501 28.9054 1.51466 29.8197 1.44919V0.414062H32.4086V1.44372C33.3506 1.50653 34.1658 1.67347 34.8545 1.94453C35.7604 2.28782 36.447 2.7932 36.9142 3.4607C37.3814 4.11866 37.6151 4.91965 37.6151 5.86368C37.6151 6.79817 37.3862 7.59916 36.9285 8.26666C36.4803 8.92462 35.8128 9.43001 34.926 9.78283C34.2177 10.057 33.3785 10.2217 32.4086 10.2769ZM29.8197 3.6678C29.494 3.70581 29.2031 3.76074 28.9472 3.83259C28.4036 3.98516 28.0031 4.22832 27.7457 4.56206C27.4882 4.88628 27.3595 5.32015 27.3595 5.86368C27.3595 6.39767 27.4978 6.83155 27.7743 7.16529C28.0604 7.49904 28.4752 7.7422 29.0187 7.89477C29.2617 7.96182 29.5287 8.01414 29.8197 8.05172V3.6678ZM32.4086 3.66021V8.06664C32.7579 8.02615 33.0678 7.9641 33.3383 7.88047C33.8628 7.71836 34.249 7.47043 34.4969 7.13669C34.7448 6.80294 34.8688 6.37384 34.8688 5.84938C34.8688 5.31538 34.7401 4.88628 34.4826 4.56206C34.2252 4.23785 33.839 3.99946 33.324 3.84689C33.0573 3.76291 32.7521 3.70069 32.4086 3.66021ZM39.6582 0.886076V10.8985H42.4903V8.28096H44.2353C45.1508 8.28096 45.9374 8.13316 46.5954 7.83756C47.2629 7.53242 47.7778 7.10331 48.1402 6.55024C48.5025 5.99718 48.6837 5.34399 48.6837 4.59067C48.6837 3.82782 48.5025 3.16986 48.1402 2.61679C47.7778 2.05419 47.2629 1.62509 46.5954 1.32948C45.9374 1.03388 45.1508 0.886076 44.2353 0.886076H39.6582ZM42.4903 6.04962H44.0637C44.6549 6.04962 45.0935 5.92089 45.3796 5.66343C45.6752 5.40597 45.823 5.04838 45.823 4.59067C45.823 4.12343 45.6752 3.76107 45.3796 3.50361C45.0935 3.24615 44.6549 3.11742 44.0637 3.11742H42.4903V6.04962ZM53.3819 10.7126C54.059 10.97 54.798 11.0987 55.599 11.0987C56.4095 11.0987 57.1485 10.97 57.816 10.7126C58.493 10.4551 59.0795 10.0927 59.5753 9.62549C60.0712 9.15824 60.4574 8.60994 60.7339 7.98059C61.02 7.3417 61.163 6.6456 61.163 5.89229C61.163 5.13897 61.02 4.44764 60.7339 3.81828C60.4574 3.18893 60.0712 2.64063 59.5753 2.17339C59.0795 1.69661 58.493 1.32948 57.816 1.07202C57.1485 0.814559 56.4095 0.685828 55.599 0.685828C54.798 0.685828 54.059 0.814559 53.3819 1.07202C52.7049 1.32948 52.1137 1.69661 51.6083 2.17339C51.1125 2.64063 50.7263 3.18893 50.4497 3.81828C50.1732 4.44764 50.0349 5.13897 50.0349 5.89229C50.0349 6.6456 50.1732 7.33693 50.4497 7.96629C50.7263 8.59564 51.1125 9.14871 51.6083 9.62549C52.1137 10.0927 52.7049 10.4551 53.3819 10.7126ZM56.6574 8.55273C56.3332 8.68623 55.9804 8.75298 55.599 8.75298C55.2176 8.75298 54.86 8.68623 54.5262 8.55273C54.202 8.41923 53.9159 8.22852 53.668 7.98059C53.4296 7.72313 53.2389 7.41799 53.0959 7.06517C52.9624 6.71235 52.8956 6.32139 52.8956 5.89229C52.8956 5.45365 52.9624 5.06269 53.0959 4.7194C53.2389 4.36658 53.4296 4.06621 53.668 3.81828C53.9159 3.56082 54.202 3.36534 54.5262 3.23184C54.86 3.09834 55.2176 3.03159 55.599 3.03159C55.9804 3.03159 56.3332 3.09834 56.6574 3.23184C56.9912 3.36534 57.2773 3.56082 57.5156 3.81828C57.7636 4.06621 57.9543 4.36658 58.0878 4.7194C58.2308 5.06269 58.3023 5.45365 58.3023 5.89229C58.3023 6.32139 58.2308 6.71235 58.0878 7.06517C57.9543 7.41799 57.7636 7.72313 57.5156 7.98059C57.2773 8.22852 56.9912 8.41923 56.6574 8.55273ZM63.2494 0.886076V10.8985H68.3844C69.6717 10.8985 70.6538 10.641 71.3309 10.1261C72.0174 9.61118 72.3607 8.91508 72.3607 8.0378C72.3607 7.1796 72.0413 6.53117 71.4024 6.09253C71.1553 5.9166 70.8701 5.77521 70.5466 5.66834C70.6985 5.59136 70.8407 5.5039 70.9733 5.40597C71.5931 4.93872 71.903 4.29983 71.903 3.48931C71.903 2.65971 71.5693 2.02082 70.9018 1.57264C70.2438 1.11493 69.3141 0.886076 68.1126 0.886076H63.2494ZM68.2699 8.8674H66.0386V6.80771H68.2699C68.68 6.80771 68.9851 6.89353 69.1854 7.06517C69.3951 7.22727 69.5 7.47997 69.5 7.82325C69.5 8.16654 69.3951 8.42877 69.1854 8.60994C68.9851 8.78158 68.68 8.8674 68.2699 8.8674ZM67.8408 4.89104H66.0386V2.91717H67.8408C68.2413 2.91717 68.5417 3.00299 68.742 3.17463C68.9422 3.33674 69.0423 3.57989 69.0423 3.90411C69.0423 4.22832 68.9422 4.47624 68.742 4.64789C68.5417 4.80999 68.2413 4.89104 67.8408 4.89104ZM77.8839 0.886076L73.4641 10.8985H76.3534L77.1341 8.95323H81.3799L82.1606 10.8985H85.1071L80.673 0.886076H77.8839ZM80.5418 6.86492L79.257 3.66349L77.9722 6.86492H80.5418ZM91.8745 8.38109V10.8985H94.6637V0.886076H90.1581C89.2523 0.886076 88.4608 1.03865 87.7838 1.34379C87.1163 1.64893 86.5966 2.08757 86.2247 2.6597C85.8623 3.22231 85.6812 3.89934 85.6812 4.6908C85.6812 5.45365 85.8528 6.11161 86.1961 6.66467C86.5489 7.21774 87.0495 7.64208 87.6979 7.93768C87.7131 7.94459 87.7283 7.95141 87.7436 7.95816L85.7098 10.8985H88.6849L90.3366 8.38109H91.8745ZM91.8745 6.19266V3.11742H90.2153C89.6623 3.11742 89.2427 3.24615 88.9566 3.50361C88.6801 3.75154 88.5418 4.13296 88.5418 4.64789C88.5418 5.15327 88.6801 5.53947 88.9566 5.80647C89.2427 6.06393 89.6527 6.19266 90.1867 6.19266H91.8745Z"
                  fill="white"
                />
              </svg>
              <img src="@/assets/images/mainblock/logo_3.svg" alt="logo" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="126"
                height="11"
                viewBox="0 0 126 11"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.08047 10.7242C1.29979 10.7528 1.5048 10.7671 1.69551 10.7671C2.32487 10.7671 2.83979 10.6241 3.24029 10.338C3.65032 10.0424 3.96976 9.62284 4.19862 9.07931C4.42747 8.52625 4.59435 7.86352 4.69924 7.09113C4.80413 6.30921 4.87088 5.43193 4.89949 4.4593L4.95044 2.8287H7.8317V10.5955H10.6209V0.583061H2.55372L2.41069 4.57372C2.39162 5.32704 2.33917 5.985 2.25335 6.5476C2.17706 7.1102 2.0388 7.54884 1.83855 7.86352C1.6383 8.16866 1.3427 8.32123 0.951734 8.32123C0.827771 8.32123 0.69904 8.30693 0.565541 8.27832L0.408203 10.5955C0.646594 10.6527 0.870682 10.6956 1.08047 10.7242ZM16.7533 0.583061L12.3335 10.5955H15.2228L16.0035 8.65021H20.2493L21.03 10.5955H23.9765L19.5424 0.583061H16.7533ZM19.4112 6.56191L18.1264 3.36047L16.8416 6.56191H19.4112ZM25.696 0.583061V10.5955H30.7022C32.0086 10.5955 33.0242 10.3142 33.7489 9.75158C34.4736 9.17944 34.8359 8.39275 34.8359 7.39151C34.8359 6.41887 34.5117 5.67509 33.8633 5.16017C33.2244 4.64524 32.2947 4.38778 31.0741 4.38778H28.4852V2.77149H34.0636V0.583061H25.696ZM30.5163 8.56439H28.4852V6.40457H30.5163C31.4889 6.40457 31.9753 6.75739 31.9753 7.46302C31.9753 7.81584 31.8465 8.08761 31.5891 8.27832C31.3411 8.46903 30.9835 8.56439 30.5163 8.56439ZM39.5734 10.4095C40.2504 10.667 40.9894 10.7957 41.7904 10.7957C42.601 10.7957 43.34 10.667 44.0075 10.4095C44.6845 10.1521 45.271 9.78972 45.7668 9.32247C46.2627 8.85523 46.6488 8.30693 46.9254 7.67757C47.2115 7.03869 47.3545 6.34259 47.3545 5.58927C47.3545 4.83595 47.2115 4.14462 46.9254 3.51527C46.6488 2.88592 46.2627 2.33762 45.7668 1.87037C45.271 1.39359 44.6845 1.02647 44.0075 0.769006C43.34 0.511544 42.601 0.382812 41.7904 0.382812C40.9894 0.382812 40.2504 0.511544 39.5734 0.769006C38.8964 1.02647 38.3052 1.39359 37.7998 1.87037C37.3039 2.33762 36.9177 2.88592 36.6412 3.51527C36.3647 4.14462 36.2264 4.83595 36.2264 5.58927C36.2264 6.34259 36.3647 7.03392 36.6412 7.66327C36.9177 8.29262 37.3039 8.84569 37.7998 9.32247C38.3052 9.78972 38.8964 10.1521 39.5734 10.4095ZM42.8489 8.24971C42.5247 8.38321 42.1719 8.44996 41.7904 8.44996C41.409 8.44996 41.0514 8.38321 40.7177 8.24971C40.3935 8.11621 40.1074 7.9255 39.8595 7.67757C39.6211 7.42011 39.4304 7.11497 39.2873 6.76215C39.1538 6.40934 39.0871 6.01837 39.0871 5.58927C39.0871 5.15063 39.1538 4.75967 39.2873 4.41639C39.4304 4.06357 39.6211 3.7632 39.8595 3.51527C40.1074 3.25781 40.3935 3.06233 40.7177 2.92883C41.0514 2.79533 41.409 2.72858 41.7904 2.72858C42.1719 2.72858 42.5247 2.79533 42.8489 2.92883C43.1826 3.06233 43.4687 3.25781 43.7071 3.51527C43.955 3.7632 44.1457 4.06357 44.2792 4.41639C44.4223 4.75967 44.4938 5.15063 44.4938 5.58927C44.4938 6.01837 44.4223 6.40934 44.2792 6.76215C44.1457 7.11497 43.955 7.42011 43.7071 7.67757C43.4687 7.9255 43.1826 8.11621 42.8489 8.24971ZM54.018 0.583061H49.4409V10.5955H52.273V7.97795H54.018C54.9334 7.97795 55.7201 7.83014 56.3781 7.53454C57.0456 7.2294 57.5605 6.8003 57.9228 6.24723C58.2852 5.69416 58.4664 5.04097 58.4664 4.28766C58.4664 3.5248 58.2852 2.86685 57.9228 2.31378C57.5605 1.75118 57.0456 1.32207 56.3781 1.02647C55.7201 0.730863 54.9334 0.583061 54.018 0.583061ZM52.273 5.74661H53.8464C54.4376 5.74661 54.8762 5.61788 55.1623 5.36041C55.4579 5.10295 55.6057 4.74537 55.6057 4.28766C55.6057 3.82041 55.4579 3.45806 55.1623 3.20059C54.8762 2.94313 54.4376 2.8144 53.8464 2.8144H52.273V5.74661ZM66.0264 0.583061H63.2372L58.8175 10.5955H61.7068L62.4875 8.65021H66.7333L67.514 10.5955H70.4605L66.0264 0.583061ZM65.8952 6.56191L64.6104 3.36047L63.3256 6.56191H65.8952ZM73.8942 2.8287V10.5955H76.6834V2.8287H79.7443V0.583061H70.819V2.8287H73.8942ZM84.1857 10.4095C84.8627 10.667 85.6017 10.7957 86.4027 10.7957C87.2132 10.7957 87.9522 10.667 88.6197 10.4095C89.2968 10.1521 89.8832 9.78972 90.3791 9.32247C90.8749 8.85523 91.2611 8.30693 91.5376 7.67757C91.8237 7.03869 91.9667 6.34259 91.9667 5.58927C91.9667 4.83595 91.8237 4.14462 91.5376 3.51527C91.2611 2.88592 90.8749 2.33762 90.3791 1.87037C89.8832 1.39359 89.2968 1.02647 88.6197 0.769006C87.9522 0.511544 87.2132 0.382812 86.4027 0.382812C85.6017 0.382812 84.8627 0.511544 84.1857 0.769006C83.5086 1.02647 82.9174 1.39359 82.412 1.87037C81.9162 2.33762 81.53 2.88592 81.2534 3.51527C80.9769 4.14462 80.8387 4.83595 80.8387 5.58927C80.8387 6.34259 80.9769 7.03392 81.2534 7.66327C81.53 8.29262 81.9162 8.84569 82.412 9.32247C82.9174 9.78972 83.5086 10.1521 84.1857 10.4095ZM87.4612 8.24971C87.1369 8.38321 86.7841 8.44996 86.4027 8.44996C86.0213 8.44996 85.6637 8.38321 85.3299 8.24971C85.0057 8.11621 84.7197 7.9255 84.4717 7.67757C84.2333 7.42011 84.0426 7.11497 83.8996 6.76215C83.7661 6.40934 83.6993 6.01837 83.6993 5.58927C83.6993 5.15063 83.7661 4.75967 83.8996 4.41639C84.0426 4.06357 84.2333 3.7632 84.4717 3.51527C84.7197 3.25781 85.0057 3.06233 85.3299 2.92883C85.6637 2.79533 86.0213 2.72858 86.4027 2.72858C86.7841 2.72858 87.1369 2.79533 87.4612 2.92883C87.7949 3.06233 88.081 3.25781 88.3194 3.51527C88.5673 3.7632 88.758 4.06357 88.8915 4.41639C89.0345 4.75967 89.106 5.15063 89.106 5.58927C89.106 6.01837 89.0345 6.40934 88.8915 6.76215C88.758 7.11497 88.5673 7.42011 88.3194 7.67757C88.081 7.9255 87.7949 8.11621 87.4612 8.24971ZM98.6302 0.583061H94.0531V10.5955H96.8852V7.97795H98.6302C99.5457 7.97795 100.332 7.83014 100.99 7.53454C101.658 7.2294 102.173 6.8003 102.535 6.24723C102.897 5.69416 103.079 5.04097 103.079 4.28766C103.079 3.5248 102.897 2.86685 102.535 2.31378C102.173 1.75118 101.658 1.32207 100.99 1.02647C100.332 0.730863 99.5457 0.583061 98.6302 0.583061ZM96.8852 5.74661H98.4586C99.0498 5.74661 99.4885 5.61788 99.7745 5.36041C100.07 5.10295 100.218 4.74537 100.218 4.28766C100.218 3.82041 100.07 3.45806 99.7745 3.20059C99.4885 2.94313 99.0498 2.8144 98.4586 2.8144H96.8852V5.74661ZM107.723 0.583061H104.934V10.5955H107.609L111.728 4.73106V10.5955H114.517V0.583061H111.857L107.723 6.46178V0.583061ZM122.832 8.07807V10.5955H125.621V0.583061H121.116C120.21 0.583061 119.418 0.735631 118.741 1.04077C118.074 1.34591 117.554 1.78455 117.182 2.35669C116.82 2.91929 116.639 3.59632 116.639 4.38778C116.639 5.15063 116.81 5.80859 117.153 6.36166C117.506 6.91472 118.007 7.33906 118.655 7.63466C118.67 7.64157 118.686 7.6484 118.701 7.65514L116.667 10.5955H119.642L121.294 8.07807H122.832ZM122.832 5.88964V2.8144H121.173C120.62 2.8144 120.2 2.94313 119.914 3.20059C119.637 3.44852 119.499 3.82995 119.499 4.34487C119.499 4.85026 119.637 5.23645 119.914 5.50345C120.2 5.76091 120.61 5.88964 121.144 5.88964H122.832Z"
                  fill="white"
                />
              </svg>
            </div>
            <div class="menu__links">
              <div class="menu__burger" @click="checked()">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="37"
                  viewBox="0 0 36 37"
                  fill="none"
                  class="switcher"
                >
                  <rect
                    x="3"
                    y="7"
                    width="30"
                    height="3"
                    rx="1.5"
                    fill="white"
                  />
                  <rect
                    x="3"
                    y="17"
                    width="30"
                    height="3"
                    rx="1.5"
                    fill="white"
                  />
                  <rect
                    x="3"
                    y="27"
                    width="30"
                    height="3"
                    rx="1.5"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </nav>
        </header>
        <div class="section__links" ref="menuList">
          <ul class="menu__list">
            <span class="section__links-line"></span>
            <li class="section__links-item" @click="goToPage('Habr')">
              <a class="link">Хабр</a>
            </li>
            <li class="section__links-item" @click="goToPage('Rutube')">
              <a class="link">Rutube</a>
            </li>
            <li class="section__links-item" @click="goToPage('Telegram')">
              <a class="link">Телеграм</a>
            </li>
            <li class="section__links-item" @click="goToPage('Email')">
              <a class="link">Почта</a>
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
    <div class="video__section" v-show="showVideo">
      <video
        ref="videoPlayer"
        class="videoPlayer"
        autoplay
        muted
        playsinline
        loop="loop"
        :poster="posterSrc"
        preload="auto"
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
        <button
          class="wrapper__arrow"
          @click.stop="scrollTo('aboutUs')"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { scrollTriggerRefresh } from "@/helpers/gsap";
const { shuffle } = require("txt-shuffle");

const videoPlayer = ref(null);
const posterSrc = ref("");
const videoSrc = ref(null);
const videoSources = ref({
  about: "mainblock/about.mp4",
  projects: "mainblock/projects.mp4",
  office: "mainblock/office.mp4",
  working: "mainblock/working.mp4",
  life: "mainblock/life.mp4",
  develop: "mainblock/develop.mp4",
});

const showBlur = ref(false);
const menuList = ref(null);
// const showNavbar = ref(false);
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

const goToPage = (link) => {
  switch (link) {
    case "Habr":
      window.open("https://habr.com/ru/companies/psb/articles/", "_blank");
      break;
    case "Rutube":
      window.open("https://rutube.ru/plst/232091", "_blank");
      break;
    case "Telegram":
      window.open("https://t.me/psb_it_team", "_blank");
      break;
    case "Email":
      window.open("mailto:BIT_communications@psbank.ru", "_blank");
      break;
  }
};

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
    // без scrollTriggerRefresh сбивается анимация gsap при прокрутке
    // при плавной прокрутке (smooth) не работает scrollTriggerRefresh
    behavior: "instant",
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
    posterSrc.value = require(`@/assets/images/mainblock/${chapter}.jpg`);
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

    // при добавлении видео (.video__section) на страницу изменятся высота страницы
    setTimeout(()=>{
      scrollTriggerRefresh()
    },50 )

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
  const videoTopPosition = ref(null);

  let title = document.querySelector(".wrapper__title");
  let content = document.querySelector(".wrapper__content");
  let arrow = document.querySelector(".wrapper__arrow");

  title.style.display = content.style.display = arrow.style.display = "none";
  setTimeout(() => {
    title.style.opacity = content.style.opacity = arrow.style.opacity = "0";
  }, 0);
  let options = {
    threshold: [0.2, 0.5, 0.6, 0.7, 0.8],
  };
  let opacity = [1, 0.9, 0.8, 0.7, 0.6, 0.3, 0.2];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const { target, isIntersecting, intersectionRect } = entry;
      // console.log("intersectionRect", intersectionRect, "entry", entry);
      if (isIntersecting && intersectionRect.top < 500) {
        window.addEventListener("scroll", () => {
          videoTopPosition.value = target.getBoundingClientRect().top;
          if (
            videoTopPosition.value < 70 &&
            !target.classList.contains("transformVideo")
          ) {
            target.classList.add("transformVideo");
            setTimeout(() => {
              title.style.opacity =
                content.style.opacity =
                arrow.style.opacity =
                  "1";
            }, 0);

            title.style.display =
              content.style.display =
              arrow.style.display =
                "";
            gradientGroup.value.style.opacity = opacity[6];
          }
          /*      if (videoTopPosition.value > 0) {
            target.classList.remove("transformVideo");
            setTimeout(() => {
              title.style.opacity =
                content.style.opacity =
                arrow.style.opacity =
                  "0";
            }, 0);

            title.style.display =
              content.style.display =
              arrow.style.display =
                "none";
          } */
          if (videoTopPosition.value > 300) {
            gradientGroup.value.style.opacity = opacity[0];
          } else if (
            videoTopPosition.value > 250 &&
            videoTopPosition.value < 300
          ) {
            gradientGroup.value.style.opacity = opacity[1];
          } else if (
            videoTopPosition.value > 200 &&
            videoTopPosition.value < 250
          ) {
            gradientGroup.value.style.opacity = opacity[2];
          } else if (
            videoTopPosition.value > 150 &&
            videoTopPosition.value < 200
          ) {
            gradientGroup.value.style.opacity = opacity[3];
          } else if (
            videoTopPosition.value > 100 &&
            videoTopPosition.value < 150
          ) {
            gradientGroup.value.style.opacity = opacity[4];
          } else if (
            videoTopPosition.value > 70 &&
            videoTopPosition.value < 100
          ) {
            gradientGroup.value.style.opacity = opacity[5];
          }
          // console.log("videoTopPosition", videoTopPosition.value);
        });
      }
    });
  }, options);
  observer.observe(videoPlayer.value);
};

const swipeMenu = () => {
  let startY = 0;
  let threshold = 20; // Пороговое значение для определения смахивания вниз

  menuList.value.addEventListener("touchstart", function (event) {
    startY = event.touches[0].clientY;
  });
  menuList.value.addEventListener("touchmove", function (event) {
    event.preventDefault();
    let currentY = event.touches[0].clientY;
    let distance = currentY - startY;

    if (distance > threshold) {
      close();
    }
  });
};

onMounted(async () => {
  videoSrc.value = require("@/assets/video/mainblock/meet.mp4");
  posterSrc.value = require("@/assets/images/mainblock/meet.jpg");
  videoPlayer.value.load();
  videoPlayer.value.play();

  // showNavbar.value = true;
  await contentLoad(loadingTime.value);
  showContent.value = true;

  // generatePsb();
  let delay = 450;
  setTimeout(() => {
    generateLab(delay);
  }, delay);

  intersectionAnimation();

  swipeMenu();
});
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4rem;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.6) 58.51%
  );
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  &__arrow {
    cursor: pointer;
    animation: moveButton 2s linear infinite;
  }

  &__title {
    display: grid;
    color: var(--color-white);
    font-size: 4.8rem;
    font-weight: 500;
    line-height: 90%;
    letter-spacing: -0.288rem;
    padding-bottom: 3rem;
    text-align: center;
    transition: opacity 2s ease;
    transition-delay: 0.3s;
    width: 27rem;
    @include mq(768) {
      font-size: 9.6rem;
      letter-spacing: -0.576rem;
      padding-bottom: 6rem;
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
    transition: all 2s ease;
    transition-delay: 0.3s;
    @include mq(600) {
      margin-bottom: 5rem;
    }
    @include mq(700) {
      grid-row-gap: 0.6rem;
    }
    @include mq(768) {
      width: 62.6rem;
      grid-template-columns: repeat(3, auto);
      grid-template-rows: 1fr 1fr;
      grid-row-gap: 0;
      height: 22rem;
      margin: 0 auto 19.5rem;
      grid-template-areas:
        "about projects work"
        "office life develop";
    }
    @include mq(810) {
      margin: 0px auto 5rem;
    }
    @include mq(930) {
      margin: 0 auto 5.5rem;
    }
    @include mq(1024) {
      margin: 0 auto 19.5rem;
    }
    @include mq(1440) {
      grid-row-gap: 1.6rem;
      width: auto;
      height: auto;
      margin-bottom: 7rem;
      grid-template-columns: auto auto auto 24rem;
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
    display: grid;
    width: 48px;
    height: 48px;
    border: none;
    border-radius: 5rem;
    background-color: rgba(255, 255, 255, 0.2);
    background-image: url("../assets/images/mainblock/ArrowDown.png");
    background-position: center center;
    background-repeat: no-repeat;
    transition: opacity 2s ease;
    transition-delay: 0.3s;
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
  opacity: 0;
  animation: opacityShow 800ms ease-out forwards;
  width: 33.5rem;

  @include mq(425) {
    width: 33.1rem;
  }
  @include mq(475) {
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
    overflow: hidden;
    margin: 0 auto;
    padding-bottom: 5px;

    @include mq(768) {
      width: 62rem;
      height: 21.2rem;
      padding: 12.5rem 0 0;
    }

    @include mq(1440) {
      width: 96.8rem;
      padding: 8rem 0 0;
    }
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
  }

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
    padding-left: 4px; // для Samsung
    white-space: nowrap;
    // overflow: hidden;

    // margin: 0;
    // animation: fadeInText 2100ms ease-out forwards;

    @include mq(375) {
      padding-left: 0;
    }
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
  }

  &__text-lab {
    position: relative;
    color: var(--color-white);
    margin: 0 auto;
    overflow: hidden;
    // text-align: center;

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
  }

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
    padding-left: 20px; // для Samsung
    // overflow: hidden;
    // margin: 0;
    // animation: fadeInText 2100ms ease-out forwards;
    @include mq(375) {
      padding-left: 0;
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
      padding: 4rem 0 10.7rem;
    }
  }

  &__links {
    position: fixed;
    width: 100vw;
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
  }
}

.video__section {
  margin-top: -47.7rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: slideInVideo 1s ease-out forwards;

  @include mq(425) {
    margin-top: -48.3rem;
  }
  @include mq(768) {
    margin-top: -48.4rem;
  }
  @include mq(1024) {
    margin-top: -48rem;
  }
  @include mq(1080) {
    margin-top: -44rem;
  }
  @include mq(1120) {
    margin-top: -41.2rem;
  }
  @include mq(1160) {
    margin-top: -38.6rem;
  }
  @include mq(1200) {
    margin-top: -36.2rem;
  }
  @include mq(1250) {
    margin-top: -35.7rem;
  }
  @include mq(1440) {
    margin-top: -26rem;
  }
  @include mq(1920) {
    margin-top: -25.4rem;
  }

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
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  padding: 4rem 1rem 0 1rem;

  @include mq(375) {
    padding: 4rem 2rem 0 2rem;
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
  transition: all 200ms ease-out;
  height: 81.2rem;
  @include mq(375) {
    height: 81.2rem;
  }

  @include mq(768) {
    height: 102.4rem;
  }

  @include mq(1024) {
    height: 100vh;
  }
  @include mq(1250) {
    height: 90rem;
  }
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
  height: 130rem;
  width: 130rem;
  top: -40rem;
  left: -40rem;
  animation: slideInGradient 1.5s ease forwards,
    gradientPurple_375 8s ease infinite;
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
  width: 85rem;
  height: 85rem;
  top: -25rem;
  left: -15rem;
  animation: slideInGradient 1.5s ease forwards,
    gradientRed_375 8s ease infinite;

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
  width: 40rem;
  height: 40rem;
  top: 40rem;
  left: 18rem;
  animation: slideInGradient 1.5s ease forwards,
    gradientYellow_375 8s ease infinite;

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
  height: 105vh !important;
  width: 120vw !important;
}

.videoPlayer {
  height: auto;
  width: auto;
  transition: height 1s ease-in-out, width 1s ease-in-out;
}
</style>
