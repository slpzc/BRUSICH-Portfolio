<template>
  <div id="root">
    <div class="content" v-if="house">
      <header>
        <div class="global-wrapper">
          <b class="block-title">{{ house.name }}</b>
          <div class="house-card">
            <img :src="getImages(house.images)[currentImage]" alt="house image">
            <images-slider :currentImage="currentImage" @selectedSlide="setImage" :images="getImages(house.images)" />
            <p class="description"> Доработка проекта и изменение планировки - бесплатно </p>
            <div class="settings-content">
              <div class="characteristics block">
                <b class="content-title">Характеристики</b>
                <div class="block-inner">
                  <div class="list">
                    <p>Площадь</p>
                    <b><svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.21423 0.673918C5.60758 0.869224 4.40352 1.27311 3.3082 1.9841C2.11058 2.76149 1.34053 3.72969 1.02069 4.86037C0.954184 5.09536 0.947876 5.40831 0.947876 8.46604V11.8144L1.06765 12.1615C1.41159 13.1579 2.12265 14.0614 3.10083 14.7448C3.89958 15.3027 5.08091 15.7909 6.17055 16.0132C7.21966 16.2273 7.10077 16.2244 14.8313 16.2244H22.0306L22.1525 16.091L22.2744 15.9577V13.228C22.2744 10.5399 22.2731 10.4967 22.1889 10.3921C22.1419 10.3337 22.0338 10.267 21.9487 10.2439C21.849 10.2169 20.676 10.2018 18.6503 10.2017L15.5067 10.2015V7.87931C15.5067 5.99403 15.4949 5.48892 15.4435 5.19451C15.0468 2.91657 12.5972 1.09418 9.40905 0.70491C8.97617 0.652031 7.55867 0.632022 7.21423 0.673918ZM8.88526 1.50382C10.0792 1.59769 11.0214 1.84159 11.9767 2.30403C14.0135 3.29008 15.0226 5.0099 14.5456 6.68248C14.2414 7.74937 13.3001 8.75028 12.0083 9.38071C10.8363 9.95263 9.67662 10.2049 8.21564 10.2056C6.86294 10.2064 5.69034 9.96165 4.57484 9.4458C1.58617 8.06383 0.881536 5.27205 3.01941 3.28346C4.08043 2.29652 5.70103 1.64665 7.444 1.50908C8.06629 1.45996 8.31611 1.45906 8.88526 1.50382ZM7.78982 3.50755C6.68473 3.61209 5.71332 4.16003 5.26088 4.93395C4.92129 5.51493 4.94456 6.28574 5.31912 6.86039C5.54275 7.20347 6.01669 7.60192 6.44807 7.80952C7.07809 8.11267 7.38017 8.1751 8.21685 8.1751C8.81913 8.1751 8.97784 8.16147 9.26124 8.08535C9.94031 7.90303 10.6088 7.50899 10.9571 7.08579C12.3546 5.38765 10.4663 3.25431 7.78982 3.50755ZM9.03085 4.42418C9.64884 4.57049 10.2713 4.99295 10.4738 5.40353C10.5904 5.63992 10.5844 6.0819 10.4614 6.30979C10.2376 6.72458 9.67591 7.10343 9.04401 7.26582C8.62366 7.37387 7.88557 7.38298 7.46489 7.28526C6.7976 7.13034 6.19298 6.72572 5.97379 6.28741C5.8495 6.03898 5.84687 5.68112 5.9674 5.42134C6.07605 5.18704 6.406 4.86171 6.69789 4.70108C6.95401 4.56012 7.36893 4.41606 7.67377 4.36228C7.9583 4.3121 8.70041 4.34595 9.03085 4.42418ZM2.43576 8.99892C3.51399 10.0051 4.93449 10.6483 6.77559 10.9642C7.13336 11.0256 7.87517 11.0338 14.3057 11.0469L21.4389 11.0614V13.2244V15.3873H21.0002H20.5616V14.2483V13.1093L20.4404 12.9825C20.2718 12.8061 20.0242 12.803 19.8482 12.975L19.7261 13.0944V14.2408V15.3873H18.8488H17.9715V14.7308V14.0744L17.8494 13.955C17.7591 13.8668 17.6876 13.8356 17.5751 13.8356C17.2013 13.8356 17.136 13.9752 17.136 14.7728V15.3873H16.2796H15.4232V14.8412C15.4232 14.1867 15.4033 14.0724 15.2661 13.9383C15.0658 13.7425 14.684 13.8279 14.5908 14.0894C14.5661 14.1587 14.5459 14.479 14.5459 14.8013V15.3873H13.6895H12.8331V14.3079C12.8331 13.7142 12.8154 13.1831 12.7938 13.1276C12.6813 12.8382 12.3537 12.7647 12.1131 12.9747L11.9767 13.0938L11.9638 14.2406L11.9509 15.3873H11.1387H10.3265V14.8013C10.3265 14.479 10.3063 14.1587 10.2816 14.0894C10.1884 13.8279 9.80658 13.7425 9.60627 13.9383C9.46912 14.0724 9.44923 14.1867 9.44923 14.8412V15.3873H8.59283H7.73643V14.7728C7.73643 14.1235 7.70025 13.9668 7.52985 13.8777C7.39884 13.8091 7.17154 13.8289 7.05419 13.9191C6.90321 14.0353 6.85964 14.2289 6.85939 14.785C6.8591 15.3384 6.89628 15.3052 6.39188 15.2027C4.96758 14.9136 3.68937 14.2673 2.86839 13.4211C2.41579 12.9547 2.12587 12.4861 1.92468 11.8961C1.8301 11.6187 1.82684 11.5614 1.81355 9.96026L1.79985 8.3103L1.96357 8.51067C2.0536 8.62088 2.26607 8.84057 2.43576 8.99892ZM14.6712 9.26229V10.2015L13.4493 10.2008L12.2273 10.2001L12.5736 10.0184C13.1814 9.69942 13.5482 9.42465 14.1072 8.8698C14.4059 8.57331 14.655 8.32901 14.6608 8.32692C14.6665 8.32484 14.6712 8.74575 14.6712 9.26229Z" fill="#333333" fill-opacity="0.5"/>
                    </svg>
                      {{ house.Ssize }} м2</b>
                  </div>
                  <div class="list">
                    <p>Размеры</p>
                    <b><svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.744668 0.397481C0.695808 0.423698 0.621318 0.486445 0.579076 0.536973C0.506851 0.623467 0.502276 1.26208 0.501344 11.4451L0.500366 22.2614L0.606571 22.3732C0.665026 22.4347 0.779937 22.4969 0.861978 22.5114C0.944063 22.5259 2.4149 22.532 4.13061 22.5251L7.24999 22.5124L7.37316 22.3923L7.49629 22.2721L7.50789 11.4938C7.51659 3.43531 7.5066 0.684914 7.46835 0.594303C7.36104 0.340194 7.45756 0.34704 4.00055 0.34847C1.78331 0.349424 0.806854 0.364114 0.744668 0.397481ZM6.66429 2.17386L6.67619 3.1555L6.05447 3.17054C5.44455 3.18523 5.43039 3.18779 5.31063 3.3047C5.21815 3.39497 5.18853 3.46591 5.18853 3.59721C5.18853 3.72851 5.21815 3.79945 5.31063 3.88971C5.43039 4.00658 5.44464 4.00918 6.05362 4.02387L6.67455 4.03886V4.72805V5.41723H6.09489C5.44393 5.41723 5.30157 5.45857 5.20998 5.67433C5.14535 5.82651 5.1724 5.97047 5.29295 6.11594C5.37384 6.21357 5.41133 6.22003 6.01529 6.24057L6.65234 6.26224L6.66456 6.96641L6.67677 7.67059H5.6117C4.90984 7.67059 4.50879 7.6874 4.43563 7.71994C4.29522 7.78234 4.17538 8.02163 4.21243 8.16563C4.2278 8.22526 4.29069 8.32315 4.35226 8.38321L4.46419 8.49245L5.55827 8.50402L6.65234 8.51559V9.20894V9.90228L6.02044 9.92394C5.43962 9.94388 5.38046 9.9535 5.28856 10.0433C5.14073 10.1878 5.15104 10.4507 5.31059 10.6065C5.43039 10.7235 5.44393 10.7259 6.05358 10.7397L6.67455 10.7538V11.4398V12.1256L6.05362 12.1406C5.44464 12.1553 5.43039 12.1579 5.31063 12.2748C5.14024 12.4411 5.14024 12.6935 5.31063 12.8598C5.43043 12.9767 5.44455 12.9793 6.05473 12.994L6.67677 13.009L6.66456 13.6873L6.65234 14.3657L5.58629 14.3763C4.42613 14.3878 4.34648 14.4027 4.25089 14.6257C4.17805 14.7957 4.21407 14.9629 4.35057 15.0881C4.45886 15.1874 4.47832 15.1892 5.56759 15.202L6.67455 15.2149V15.902V16.589L6.05362 16.604C5.44464 16.6187 5.43039 16.6213 5.31063 16.7382C5.21815 16.8284 5.18853 16.8994 5.18853 17.0307C5.18853 17.162 5.21815 17.2329 5.31063 17.3232C5.43039 17.4401 5.44464 17.4427 6.05362 17.4574L6.67455 17.4723V18.1615V18.8507H6.09489C5.44393 18.8507 5.30157 18.892 5.20998 19.1078C5.14535 19.26 5.1724 19.404 5.29295 19.5494C5.37384 19.6471 5.41133 19.6535 6.01529 19.6741L6.65234 19.6957L6.66429 20.6816L6.67624 21.6674H4.01028H1.34432V11.4186V1.16982L3.99833 1.181L6.65234 1.19218L6.66429 2.17386ZM10.8494 1.36322C10.7116 1.43641 9.30013 3.79429 9.26398 4.01174C9.24305 4.13741 9.26184 4.17996 9.39621 4.31104L9.55287 4.46388H10.0903H10.6278V11.4406V18.4174H10.1148C9.51463 18.4174 9.37427 18.4654 9.29573 18.6976C9.26748 18.7811 9.25771 18.8902 9.27397 18.9402C9.32487 19.0968 10.6352 21.2931 10.7502 21.4147C10.8917 21.5644 11.035 21.597 11.2198 21.5217C11.3497 21.4687 11.4593 21.3073 12.0958 20.2318C12.7173 19.1817 12.8237 18.9757 12.825 18.8194C12.8261 18.6855 12.7994 18.6099 12.7255 18.5378C12.6325 18.4469 12.5784 18.4379 12.0481 18.4248L11.4718 18.4105V11.4372V4.46388H11.9537C12.2188 4.46388 12.4992 4.44226 12.5769 4.41587C12.7273 4.36474 12.8493 4.18737 12.8479 4.02188C12.8466 3.86042 11.4134 1.46575 11.2647 1.37657C11.1147 1.2866 11.0006 1.28296 10.8494 1.36322ZM11.3796 3.10376C11.528 3.35605 11.6494 3.58005 11.6494 3.6015C11.6494 3.62299 11.3796 3.64054 11.0498 3.64054C10.72 3.64054 10.4501 3.62745 10.4501 3.61142C10.4501 3.53858 11.0392 2.60239 11.0724 2.62241C11.093 2.63485 11.2312 2.85143 11.3796 3.10376ZM11.6494 19.2775C11.6494 19.3208 11.1393 20.189 11.0796 20.2473C11.0548 20.2715 10.9237 20.0917 10.7444 19.7871C10.5826 19.512 10.4501 19.2766 10.4501 19.2639C10.4501 19.2511 10.72 19.2407 11.0498 19.2407C11.3796 19.2407 11.6494 19.2573 11.6494 19.2775Z" fill="#333333" fill-opacity="0.5"/>
                    </svg>
                      {{ house.size }} м</b>
                  </div>
                  <div class="list">
                    <p>Комнат</p>
                    <b><svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.04181 0.348856C6.02883 0.410721 5.92655 1.50789 5.81445 2.78695C5.70241 4.06601 5.59878 5.18569 5.58424 5.27506L5.55774 5.4376H6.9882H8.41861V11.405C8.41861 18.25 8.38323 17.7133 8.86645 18.1956C9.25646 18.5848 9.50541 18.6583 10.3404 18.6307C10.9507 18.6105 11.1067 18.572 11.4312 18.3609C11.5579 18.2785 11.5681 18.2799 11.7318 18.4013C11.825 18.4704 11.978 18.5526 12.0716 18.5839C12.1927 18.6244 13.2825 18.6408 15.8362 18.6408C19.7119 18.6408 19.7018 18.6415 19.9821 18.3786C20.0947 18.2731 20.1022 18.2724 20.2341 18.358C20.5645 18.5724 20.7174 18.6105 21.3297 18.6307C22.1646 18.6583 22.4135 18.5848 22.8036 18.1956C23.2583 17.7418 23.2514 17.79 23.2514 15.0399C23.2514 12.2906 23.2581 12.338 22.8044 11.8852C22.4642 11.5456 22.1797 11.4391 21.6137 11.4391H21.247V10.1229C21.247 9.39907 21.2229 8.67324 21.1934 8.51005C21.0007 7.44244 20.04 6.48355 18.9702 6.29126C18.5661 6.21859 13.1039 6.21859 12.6998 6.29126C12.2115 6.37903 11.6432 6.68345 11.2592 7.06295C10.8754 7.44234 10.5661 8.01413 10.4766 8.51005C10.4471 8.67324 10.423 9.39907 10.423 10.1229V11.4391H10.0552C9.85283 11.4391 9.58223 11.4706 9.45385 11.5092L9.22038 11.5793V8.50845V5.4376H10.6508H12.0813L12.0547 5.27506C12.0402 5.18569 11.9366 4.06601 11.8245 2.78695C11.7124 1.50789 11.6102 0.410721 11.5972 0.348856L11.5737 0.236328H8.8195H6.06531L6.04181 0.348856ZM10.8747 1.14905C10.8751 1.21092 10.9424 1.98175 11.0244 2.86197C11.1063 3.74218 11.1737 4.50172 11.1741 4.54988C11.1747 4.632 11.0294 4.6374 8.8195 4.6374C6.60961 4.6374 6.46434 4.632 6.46494 4.54988C6.46534 4.50172 6.53269 3.74218 6.61462 2.86197C6.69655 1.98175 6.7639 1.21092 6.7643 1.14905L6.76495 1.03652H8.8195H10.874L10.8747 1.14905ZM3.4584 5.025C3.15011 5.36308 2.75163 6.07961 2.68203 6.42119L2.64976 6.57953L2.42616 6.48085C2.10435 6.33877 1.5853 6.23964 1.15781 6.23864L0.78719 6.23779L0.81445 6.72541C0.8596 7.53351 1.15545 8.25384 1.68036 8.83368L1.86577 9.03848H1.68452C1.58485 9.03848 1.50332 9.06203 1.50332 9.09079C1.50332 9.1196 1.65957 9.68784 1.85059 10.3536C2.04156 11.0194 2.21314 11.626 2.23183 11.7016L2.26586 11.8392H1.1329H0V15.24V18.6408H0.400886H0.801772V17.6406V16.6403H3.80842H6.81507V17.6406V18.6408H7.21595H7.61684V15.24V11.8392H6.48393H5.35098L5.385 11.7016C5.4037 11.626 5.57528 11.0194 5.76625 10.3536C5.95727 9.68784 6.11351 9.1196 6.11351 9.09079C6.11351 9.06203 6.03233 9.03848 5.93312 9.03848H5.75267L6.00733 8.76041C6.49761 8.22503 6.81231 7.38252 6.81421 6.60038L6.81507 6.23779H6.48724C6.10319 6.23779 5.50166 6.35302 5.19032 6.4862L4.97089 6.58008L4.91206 6.34682C4.81615 5.96663 4.47264 5.36598 4.15058 5.01515C3.98506 4.8349 3.83087 4.68742 3.80797 4.68742C3.78507 4.68742 3.62777 4.8393 3.4584 5.025ZM3.97499 6.15027C4.04304 6.29466 4.12347 6.50286 4.15373 6.61289C4.22945 6.8883 4.22223 7.56117 4.14025 7.86319C4.06559 8.13841 3.85773 8.58837 3.80526 8.58837C3.75465 8.58837 3.52043 8.04263 3.4618 7.78817C3.39345 7.4913 3.3941 6.8637 3.46311 6.61289C3.53642 6.34622 3.75475 5.88771 3.80842 5.88771C3.83197 5.88771 3.90694 6.00589 3.97499 6.15027ZM19.2516 7.22128C19.7172 7.44149 20.0076 7.72506 20.233 8.18007L20.4201 8.55781L20.4357 10.0609L20.4512 11.5641L20.2102 11.7433C19.9104 11.9661 19.6962 12.343 19.6578 12.7155C19.6422 12.8662 19.6226 12.9894 19.6142 12.9894C19.6059 12.9894 19.5245 12.9462 19.4333 12.8933C18.9956 12.6394 18.9223 12.6346 15.703 12.65L12.7031 12.6644L12.4024 12.8119C12.2371 12.893 12.0881 12.9669 12.0714 12.9762C12.0546 12.9854 12.0281 12.8689 12.0125 12.7173C11.9737 12.3429 11.7602 11.9666 11.4598 11.7433L11.2188 11.5641L11.2343 10.0637L11.2499 8.56336L11.4085 8.22928C11.4957 8.04559 11.6591 7.79552 11.7716 7.67369C11.9925 7.43454 12.4465 7.16742 12.7591 7.0927C12.8699 7.0662 14.2367 7.04979 15.9352 7.05459L18.9168 7.063L19.2516 7.22128ZM2.07353 7.19008C2.50113 7.34972 2.58612 7.43859 2.62475 7.76637C2.64299 7.92156 2.72272 8.21503 2.80189 8.41848C2.88107 8.62193 2.93539 8.78842 2.92261 8.78842C2.90988 8.78842 2.80295 8.72215 2.68504 8.64123C2.22066 8.32235 1.76104 7.6865 1.67134 7.23884C1.63421 7.05349 1.68974 7.04674 2.07353 7.19008ZM5.96198 7.17552C5.95983 7.33376 5.73072 7.82523 5.53504 8.09125C5.3592 8.33031 4.81289 8.78842 4.7036 8.78842C4.67839 8.78842 4.68962 8.7265 4.7286 8.65088C4.83825 8.43823 5.01108 7.84439 5.01108 7.6805C5.01108 7.4922 5.19228 7.32181 5.53063 7.19193C5.85509 7.0674 5.96353 7.06325 5.96198 7.17552ZM5.06119 9.87778C5.06119 9.91419 4.83323 10.7256 4.60503 11.5016L4.50571 11.8392H3.80842H3.11113L3.01181 11.5016C2.7836 10.7256 2.55565 9.91419 2.55565 9.87778C2.55565 9.85628 3.1194 9.83867 3.80842 9.83867C4.49744 9.83867 5.06119 9.85628 5.06119 9.87778ZM10.9158 12.3413C10.9801 12.3814 11.0759 12.4978 11.1288 12.5998C11.2193 12.7747 11.2248 12.916 11.2247 15.0504C11.2247 17.1067 11.2166 17.3317 11.137 17.4905C11.0034 17.7576 10.7868 17.8405 10.2226 17.8405C9.65835 17.8405 9.44182 17.7576 9.30818 17.4905C9.2286 17.3316 9.22053 17.1063 9.22053 15.0399C9.22053 12.9736 9.2286 12.7483 9.30818 12.5893C9.45164 12.3027 9.65655 12.2308 10.2727 12.251C10.6207 12.2624 10.8385 12.293 10.9158 12.3413ZM22.0989 12.3269C22.4508 12.5023 22.4495 12.492 22.4495 15.0399C22.4495 17.1063 22.4414 17.3316 22.3618 17.4905C22.2282 17.7576 22.0117 17.8405 21.4474 17.8405C20.8832 17.8405 20.6666 17.7576 20.533 17.4905C20.4534 17.3316 20.4453 17.1061 20.4453 15.0391C20.4452 12.4945 20.4416 12.522 20.7991 12.3306C21.037 12.2033 21.8463 12.201 22.0989 12.3269ZM6.81507 14.2397V15.8401H3.80842H0.801772V14.2397V12.6394H3.80842H6.81507V14.2397ZM18.9669 13.5725C19.391 13.8009 19.5984 14.1449 19.6331 14.6774L19.6566 15.0399H15.835H12.0134L12.037 14.6774C12.0773 14.0563 12.3762 13.6566 12.9283 13.4855C12.9973 13.4641 14.3392 13.4506 15.9102 13.4556C18.7325 13.4645 18.7689 13.4659 18.9669 13.5725ZM2.8062 14.2397V14.6398H3.80842H4.81063V14.2397V13.8397H3.80842H2.8062V14.2397ZM19.6434 16.7176C19.6434 17.5826 19.6417 17.5969 19.5204 17.7178L19.3974 17.8406H15.835H12.2726L12.1496 17.7178C12.0283 17.5969 12.0266 17.5826 12.0266 16.7176V15.8401H15.835H19.6434V16.7176Z" fill="#333333" fill-opacity="0.5"/>
                    </svg> {{ house.rooms }}</b>
                  </div>
                  <div class="list">
                    <p>Этажей</p>
                    <b> <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7378 0.847988C18.6061 0.904438 1.01747 13.2154 0.888811 13.3412C0.825185 13.4033 0.763055 13.5184 0.75043 13.5973C0.703458 13.8912 1.03703 14.1706 1.31002 14.066C1.40193 14.0308 2.47932 13.2935 3.19502 12.7761L3.39229 12.6335V15.1241V17.6147L2.64544 17.6284L1.89859 17.6422L1.76765 17.7732C1.58425 17.9565 1.58254 18.1977 1.76337 18.3785C1.877 18.492 1.92247 18.5071 2.20509 18.5253L2.52014 18.5455V20.1582V21.7708L2.64133 21.9064L2.76252 22.042L12.195 22.0526C20.5763 22.062 21.6411 22.0562 21.7498 22C22.0161 21.8624 21.9981 22.4004 21.9981 14.5581C21.9981 9.57726 21.9846 7.38434 21.9535 7.29497C21.929 7.22457 21.8589 7.13309 21.7978 7.09163C21.696 7.02256 21.5519 7.01521 20.0773 7.00405L18.468 6.99184V4.54386V2.09591L18.6625 1.96184C19.2286 1.57184 19.3797 1.3892 19.3231 1.1639C19.2606 0.914773 18.9601 0.752645 18.7378 0.847988ZM17.5543 4.87861V6.99549L16.921 6.99574C16.5727 6.99587 16.2184 7.01517 16.1338 7.03866C15.9347 7.09391 15.81 7.25313 15.81 7.45208C15.81 7.74931 16.0446 7.90791 16.4849 7.90841L16.6822 7.90866V8.77886V9.64903L14.6064 9.6609L12.5306 9.67273L12.4013 9.80198C12.1991 10.0041 12.2273 10.3359 12.4589 10.4806C12.509 10.5118 12.6853 10.5461 12.851 10.5567L13.1521 10.5761V11.4408V12.3055L11.0859 12.3174C9.16276 12.3284 9.01197 12.3345 8.90764 12.4052C8.75493 12.5088 8.68749 12.7217 8.74866 12.9069C8.81424 13.1055 8.96354 13.1887 9.29753 13.2125L9.5804 13.2328V14.0988V14.9649L7.61806 14.9652C6.40125 14.9653 5.59729 14.9816 5.50186 15.0081C5.30442 15.0629 5.17812 15.2228 5.17812 15.4179C5.17812 15.7145 5.4065 15.8781 5.82052 15.8781H6.05027V16.7498V17.6214H5.15736H4.26444V14.8259V12.0304L10.8782 7.39895C14.5158 4.85168 17.506 2.76621 17.5232 2.76464C17.5403 2.76302 17.5543 3.71433 17.5543 4.87861ZM21.1157 14.5395L21.1052 21.1703L12.2488 21.1808L3.39229 21.1913V19.8629V18.5346L4.91856 18.5343C5.83647 18.5342 6.50616 18.5171 6.59869 18.4914C6.68329 18.4679 6.79073 18.4001 6.83749 18.3408C6.91852 18.2378 6.92242 18.1787 6.92242 17.0573V15.8817L8.56214 15.8695L10.2019 15.8573L10.3376 15.7217L10.4733 15.5861L10.4861 14.4057L10.4988 13.2253L12.1058 13.2131C13.578 13.2019 13.722 13.1946 13.8238 13.1255C13.885 13.084 13.955 12.9925 13.9796 12.9221C14.0071 12.8432 14.0242 12.3673 14.0242 11.6797V10.5651L15.5505 10.5649C16.4684 10.5648 17.1381 10.5477 17.2306 10.522C17.3152 10.4985 17.4226 10.4307 17.4694 10.3713C17.5504 10.2684 17.5543 10.2093 17.5543 9.08602V7.90866H19.3403H21.1262L21.1157 14.5395Z" fill="#333333" fill-opacity="0.5"/>
                    </svg>
                      {{ house.floors }}</b>
                  </div>
                </div>
              </div>
              <!--              <div class="features block">-->
              <!--                <b class="content-title">Особенности</b>-->
              <!--                <ul>-->
              <!--                  <li v-for="(item, index) in house.technicalSettings.features" :key="index"><svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">-->
              <!--                    <path d="M3.63425 5.33046L1.47161 3.21839L0.750732 3.92241L3.63425 6.73851L9.81323 0.704023L9.09235 0L3.63425 5.33046Z" fill="#2CC37C"/>-->
              <!--                  </svg>-->
              <!--                   {{ item }}</li>-->
              <!--                </ul>-->
              <!--              </div>-->
            </div>
            <div class="price-of-completion">
              <b class="content-title">Цена за комплектацию</b>
              <div class="buttons">
                <customized-button @click.native="selectComplect([0, 1, 2])" :background="selectedComplection[0] == 0 ? '' : '#F8F8F8'" :color="selectedComplection[0] == 0 ? 'white' : '#333333'" :padding="'12px 0'">Под усадку</customized-button>
                <customized-button @click.native="selectComplect([3, 4, 5])" :background="selectedComplection[0] == 3 ? '' : '#F8F8F8'" :color="selectedComplection[0] == 3 ? 'white' : '#333333'" :padding="'12px 0'">Под ключ</customized-button>
              </div>
              <div class="complect">
                <ul>
                  <li v-for="(item, index) in selectedComplection">
                                        <img :src="house.technicalSettings.priceComplection[item].img">
                    <p> {{ house.technicalSettings.priceComplection[item].title }} </p>
                    <div class="line"></div>
                    <b> {{ house.technicalSettings.priceComplection[item].price }}₽ </b>
                  </li>
                </ul>
              </div>
              <customized-button :padding="'10px 0'" class="order-project">Заказать проект</customized-button>
              <features-slider/>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section class="complect">
          <div class="global-wrapper">
            <div class="buttons">
              <customized-button @click.native="actuallyList = 0" :background="actuallyList === 0 ? '' : 'white'" :color="actuallyList === 0 ? 'white' : '#333333'" :padding="'12px 0'">Комплектация</customized-button>
              <customized-button @click.native="actuallyList = 1" :background="actuallyList === 1 ? '' : 'white'" :color="actuallyList === 1 ? 'white' : '#333333'" :padding="'12px 0'">Технологии</customized-button>
              <customized-button @click.native="actuallyList = 2" :background="actuallyList === 2 ? '' : 'white'" :color="actuallyList === 2 ? 'white' : '#333333'" :padding="'12px 0'">Доп. услуги</customized-button>
            </div>
            <div class="content">
              <div v-if="actuallyList === 0" class="foundation">
                <b class="content-title">Комплектация</b>
                <div class="top-card">
                  <b class="content-title">Фундамент</b>
                  <p class="block-subtitle">В базовую стоимость не входит, рассчитывается отдельно. Возможные варианты: опорно-столбчатый из бетонных блоков, свайно-винтовой, ленточный, монолитная плита</p>
                  <customized-button :padding="'8px 0'">Выбрать фундамент</customized-button>
                </div>
                <p class="subtitle"> {{ house.technicalSettings.equipments.header ? house.technicalSettings.equipments.header : 'Загрузка..' }} </p>
                <div class="cards">
                  <div class="card" v-for="(item, index) in house.technicalSettings.equipments.points" :key="index">
                    <div class="top">
                      <b> {{ item.title }} </b>
                      <div class="for">
                        <p v-if="item.pod_kluch"> <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.63425 6.14638L1.47161 4.03431L0.750732 4.73833L3.63425 7.55442L9.81323 1.51994L9.09235 0.815918L3.63425 6.14638Z" fill="#2CC37C"/>
                        </svg>
                          Под ключ </p>
                        <p v-if="item.pod_usadku"> <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.63425 6.14638L1.47161 4.03431L0.750732 4.73833L3.63425 7.55442L9.81323 1.51994L9.09235 0.815918L3.63425 6.14638Z" fill="#2CC37C"/>
                        </svg>
                          Под усадку </p>
                      </div>
                    </div>
                    <p class="content">{{ item.description }}</p>
                  </div>
                </div>
                <div class="select-brus">
                  <b class="content-title">
                    Брус на выбор
                  </b>
                  <div class="buttons">
                    <customized-button @click.native="setBrus(true)" :background="brus ? '' : '#F8F8F8'" :color="brus ? 'white' : '#333333'" :padding="'12px 0'">Прямой</customized-button>
                    <customized-button @click.native="setBrus(false)" :background="!brus ? '' : '#F8F8F8'" :color="!brus ? 'white' : '#333333'" :padding="'12px 0'">Овал</customized-button>
                  </div>
                  <div class="images">
                    <div class="image">
                      <img :src="brus ? 'https://i.imgur.com/1Au1WUc.png' : 'http://localhost:3000/_nuxt/assets/img/Category/detailing/timber/types/oval/1.png'">
                      <p>90x140</p>
                    </div>
                    <div class="image">
                      <img :src="brus ? 'https://i.imgur.com/4iTysYT.png' : 'http://localhost:3000/_nuxt/assets/img/Category/detailing/timber/types/oval/2.png'" >
                      <p>140x140</p>
                    </div>
                    <div class="image">
                      <img :src="brus ? 'https://i.imgur.com/f29il1Q.png' : 'http://localhost:3000/_nuxt/assets/img/Category/detailing/timber/types/oval/3.png'">
                      <p>190x140</p>
                    </div>
                  </div>
                </div>
              </div>

              <div v-if="actuallyList === 1" class="technologies">
                <b class="content-title">Технологии</b>
                <technologies />
              </div>

              <div class="services" v-if="actuallyList === 2">
                <b class="content-title">Дополнительные услуги</b>
                <div class="services-content">
                  <div class="card" v-for="service in house.technicalSettings.extra.point">
                    <b>{{ service.title }}</b>
                    <p class="text">{{ service.description }}</p>
                    <p class="price">{{ service.price }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="designer">
          <div class="global-wrapper">
            <b class="block-title">Вы - дизайнер!</b>
            <p class="block-subtitle">Количество элементов разной окраски и цветовых решений может немного отличаться от
              примера.</p>
          </div>
          <houses-house-editor/>
        </section>
        <section class="free-taxing">
          <div class="global-wrapper">
            <taxing-slider/>
            <customized-button :padding="'11px 0'" :background="'#F8F8F8'" :color="'#333333'"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.6875 0.8125H0.8125V11.6875H11.6875V0.8125ZM6.87229 3.26542L7.51271 2.625L8.36458 3.47687L9.21646 2.625L9.85687 3.26542L9.005 4.11729L9.85687 4.96917L9.21646 5.60958L8.36458 4.76375L7.51271 5.61563L6.87229 4.97521L7.72417 4.12333L6.87229 3.26542ZM2.77604 3.66417H5.79688V4.57042H2.77604V3.66417ZM5.94792 8.66667H4.73958V9.875H3.83333V8.66667H2.625V7.76042H3.83333V6.55208H4.73958V7.76042H5.94792V8.66667ZM9.875 9.42188H6.85417V8.51563H9.875V9.42188ZM9.875 7.91146H6.85417V7.00521H9.875V7.91146Z" fill="#2CC37C"/>
            </svg>
              Скрыть калькулятор доставки</customized-button>
            <div class="taxing-calculator">
              <b class="block-title">Рассчитаем доставку до вашего участка</b>
              <div class="description">
                <p>Расстояние: <span>{{ distance }} км</span></p>
                <p>Бесплатно: <span>первые 500 км</span></p>
                <p>Оплачиваете: <span>{{ clientPayFor }} км</span></p>
              </div>
              <div class="price">Итого: <span>{{ clientPayFor * $options.PRICE_PER_KM }}₽</span></div>
            </div>
          </div>
          <client-only>
            <yandex-map
              v-if="showMap"
              ref="myMap"
              :coords="$options.DEFAULT_COORDS"
              class="full-width"
              :zoom="$options.MAP_ZOOM"
              :scroll-zoom="false"
              @map-was-initialized="ready"
              @click="setPoint"
            >
            </yandex-map>
          </client-only>
        </section>
        <section class="steps__of__job">
          <div class="global-wrapper">
            <b class="block-title">Этапы работ</b>
            <div class="step__card" v-for="(step, index) in stepsOfjob" :key="index">
              <p class="index"> 0{{ index+1 }}</p>
              <div class="text__content">
                <b>{{ step.name }}</b>
                <p> {{ step.description }} </p>
              </div>
              <div class="image">
                <img :src="step.img">
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
      <div class="loading" v-else>
        <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
  </div>
</template>

<script>
import { loadYmap } from 'vue-yandex-maps';
import { API_KEY } from '@/assets/config/yandex.js';
import ImagesSlider from '@/components/houses/images-slider'
import CustomizedButton from '@/components/Button'
import FeaturesSlider from '@/components/houses/features-slider'
import TaxingSlider from '@/components/houses/taxing-slider'
import YamapWithRoutes from '@/components/houses/YamapWithRoutes'
import yandexMixin from 'assets/mixins/yandex'
import Technologies from '@/components/houses/technologies'
import housesConfig from '~/assets/config/houses';
import requestData from '~/assets/config/requestData';
import getImages from '@/assets/mixins/getImages.js';
import APIRequest from '@/assets/utils/APIRequest';

export default {
  name: 'dynamicHouse',
  components: { Technologies, YamapWithRoutes, TaxingSlider, FeaturesSlider, CustomizedButton, ImagesSlider },
  mixins: [yandexMixin, getImages],
  FREE_KM: 500,
  PRICE_PER_KM: 100,
  FROM_COORDS: [58.812924, 36.500804],
  data () {
    return {
      showMap: false,
      currentImage: 0,
      actuallyList: 0,
      distance: 0,
      clientPayFor: 0,
      route: null,
      address: null,
      buildingRoute: false,
      designerButtons: [
        {
          name: 'Крыша'
        },
        {
          name: 'Стены'
        },
        {
          name: 'Окна'
        },
        {
          name: 'Водосточка'
        },
        {
          name: 'Наличники'
        }
      ],
      stepsOfjob: [
        {
          name: 'Согласовываем проект',
          description: 'Оставьте нам заявку, или звоните 8(800)555-35-35',
          img: 'https://i.imgur.com/TvkeaIF.png'
        },
        {
          name: 'Доставляем материалы',
          description: 'Доставка и выгрузка материалов в назначенный день',
          img: 'https://i.imgur.com/IDdnWDR.png'
        },
        {
          name: 'Подписываем договор',
          description: 'Прораб предоставит вам оригинал договора. Вы оплачиваете 70% стоимости',
          img: 'https://i.imgur.com/Y79s9Bv.png'
        },
        {
          name: 'Строим объект',
          description: 'Производим полный цикл строительных и отделочных работ',
          img: 'https://i.imgur.com/YvcK9Yx.png'
        },
        {
          name: 'Сдаем объект',
          description: 'Вы принимаете работу и подписываете акт сдачи-приемки',
          img: 'https://i.imgur.com/xCLGUcJ.png'
        },
        {
          name: 'Даем гарантии',
          description: 'Даем официальную гарантию на все виды предоставленных услуг',
          img: 'https://i.imgur.com/kZtRgb0.png'
        }
      ],
      houseId: null,
      category: null,
      houseFromFetch: false,
      selectedComplection: [0,1,2],
      found: [
        {
          title: 'Основание',
          content: 'Обвязка - 2 нижних венца из нестроганного бруса. Толщина сечения согласно выбранной толщины наружных стен (100х150 мм, 150х150 мм или 200х150 мм)',
          for: ['Под усадку', 'Под ключ']
        },
        {
          title: 'Половые лаги',
          content: 'Обрезной брус 50х150 мм с шагом не более 600 мм.',
          for: ['Под усадку', 'Под ключ']
        },
        {
          title: 'Черновой пол',
          content: 'Обрезная доска 1-го сорта 22х100 мм естественной влажности, укладывается на брусок 40х50 мм, прибитый к лагам.',
          for: ['Под ключ']
        }
      ],
      equipment: null,
      brus: true
    }
  },
  async fetch() {
    this.category = this.$route.params.category;
    this.houseId = this.$route.params.name;
    console.log(this.houseId);
    console.log(this.category)
    if (this.houseId === 'undefined') return;

    if (!housesConfig.availableRoutes.includes(this.category)) this.$router.push('/');

    if (housesConfig.houses[this.category]) {
      console.log('popali v if')
      let data = await housesConfig.houses[this.category].createRequest({
        populate: requestData.houses.populate,
        filters: {
          id: { $eq: this.houseId },
        },
        asynchronous: true,
      });

      const house = data[0];

      data = await housesConfig.equipments[this.category].createRequest({
        populate: requestData.equipments[this.category].populate,
        fields: requestData.equipments[this.category].fields,
        asynchronous: true,
      });

      this.equipment = data.attributes;
      data = await housesConfig.extra[this.category].createRequest({
        populate: requestData.extra[this.category].populate,
        asynchronous: true,
      });

      this.extra = data.attributes;
      const houseShape = {
        name: house.name_description,
        Ssize: house.s,
        size: house.size,
        floors: house.floor.data.attributes.floor,
        prefix: house.name,
        rooms: house.rooms,
        technicalSettings: {
          priceComplection:  [
            {
              price: house.price_1,
              title: '90x140',
              img: 'https://i.imgur.com/OwFTblK.png'
            },
            {
              price: house.price_2,
              title: '140x140',
              img: 'https://i.imgur.com/IqCca4k.png'
            },
            {
              price: house.price_3,
              title: '190x140',
              img: 'https://i.imgur.com/o4Gh6tU.png'
            },
            {
              price: house.price_4,
              title: '90x140',
              img: 'https://i.imgur.com/OwFTblK.png'
            },
            {
              price: house.price_5,
              title: '140x140',
              img: 'https://i.imgur.com/IqCca4k.png'
            },
            {
              price: house.price_6,
              title: '190x140',
              img: 'https://i.imgur.com/o4Gh6tU.png'
            },
          ],
          extra: this.extra,
          equipments: {
            header: this.equipment.header1,
            points: this.equipment.point1
          }
        },
        images: house.imgs.data
      }
      this.houseFromFetch = houseShape
    }
  },
  methods: {
    setBrus (type) {
      if (type) {
        return this.brus = true
      }
      return this.brus = false
    },
    selectComplect (to) {
      console.log(this.category)
      if (this.category !== "doma-pod-usadku") {
       return this.selectedComplection = to
      }
      return false
    },
    setImage (index) {
      this.currentImage = index
    },
    ready() {
      const map = this.$refs.myMap.myMap;

      map.controls.remove('rulerControl');
      map.controls.remove('geolocationControl');
      map.controls.remove('trafficControl');
      map.controls.remove('typeSelector');
      map.controls.remove('fullscreenControl');
      map.controls.remove('searchControl');

      const searchControl = new ymaps.control.SearchControl({
        options: {
          useMapBounds: true,
          noCentering: true,
          noPopup: true,
          noPlacemark: true,
          placeholderContent: 'Адрес доставки',
          size: 'large',
          float: 'none',
          position: {
            left: 10,
            top: 10,
          },
        },
      });

      map.controls.add(searchControl);

      const warehouse = new ymaps.Placemark(
        this.$options.FROM_COORDS,
        {
          iconContent: 'БРУСИЧЪ',
        },
        {
          preset: 'islands#darkGreenStretchyIcon',
          draggable: false,
        }
      );

      map.geoObjects.add(warehouse);

      searchControl.events.add('resultselect', (e) => {
        if (this.buildingRoute) return;
        this.buildingRoute = true;

        const coords = e.originalEvent.target.state._data.results[0].geometry.getCoordinates();
        this.spawnPath(coords);
      });
      const copyright = document.querySelector('.ymaps-2-1-79-copyrights-pane')
      copyright.style.display = 'none'
    },

    setPoint(e) {
      if (this.buildingRoute) return;
      this.buildingRoute = true;

      const coords = e.get('coords');
      this.spawnPath(coords);
    },

    spawnPath(coords) {
      const map = this.$refs.myMap.myMap;

      if (this.route) {
        map.geoObjects.remove(this.route);
      }
      ymaps
        .route([coords, this.$options.FROM_COORDS], {
          mapStateAutoApply: true,
        })
        .then((route) => {
          this.buildingRoute = false;
          this.route = route;
          route.getPaths().options.set({
            strokeColor: '2CC37C',
            opacity: 0.9,
          });

          if (this.address) {
            map.geoObjects.remove(this.address);
          }

          this.address = new ymaps.Placemark(
            coords,
            {
              iconContent: 'Адрес Доставки',
            },
            {
              preset: 'islands#darkGreenStretchyIcon',
              draggable: true,
            }
          );

          this.address.events.add('dragend', () => {
            if (this.buildingRoute) return;

            const coords = this.address.geometry.getCoordinates();

            map.geoObjects.remove(this.route);
            ymaps
              .route([coords, this.$options.FROM_COORDS], {
                mapStateAutoApply: true,
              })
              .then((route) => {
                this.buildingRoute = false;
                this.route = route;
                this.countDist(route.getPaths().get(0).getLength());

                route.getPaths().options.set({
                  strokeColor: '2CC37C',
                  opacity: 0.9,
                });

                map.geoObjects.add(route);
              });
          });

          map.geoObjects.add(this.address);
          this.countDist(route.getPaths().get(0).getLength());

          map.geoObjects.add(route);
        });
    },

    countDist(length) {
      const km = parseInt(length / 1000);

      this.distance = km;
      this.clientPayFor = Math.max(km - this.$options.FREE_KM, 0);
    },
  },
  async mounted() {
    await loadYmap({
      apiKey: API_KEY,
    })
    this.showMap = true
  },
  computed: {
    house () {
      return this.houseFromFetch ? this.houseFromFetch : false
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../static/scss/house';
.ymap-container{
  margin-top: 20px;
  height: 277px;
  border-radius: 20px !important;
}
.loading{
  text-align: center;
  .lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
  .lds-roller div {
    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
  }
  .lds-roller div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #2CC37C;
    margin: -4px 0 0 -4px;
  }
  .lds-roller div:nth-child(1) {
    animation-delay: -0.036s;
  }
  .lds-roller div:nth-child(1):after {
    top: 63px;
    left: 63px;
  }
  .lds-roller div:nth-child(2) {
    animation-delay: -0.072s;
  }
  .lds-roller div:nth-child(2):after {
    top: 68px;
    left: 56px;
  }
  .lds-roller div:nth-child(3) {
    animation-delay: -0.108s;
  }
  .lds-roller div:nth-child(3):after {
    top: 71px;
    left: 48px;
  }
  .lds-roller div:nth-child(4) {
    animation-delay: -0.144s;
  }
  .lds-roller div:nth-child(4):after {
    top: 72px;
    left: 40px;
  }
  .lds-roller div:nth-child(5) {
    animation-delay: -0.18s;
  }
  .lds-roller div:nth-child(5):after {
    top: 71px;
    left: 32px;
  }
  .lds-roller div:nth-child(6) {
    animation-delay: -0.216s;
  }
  .lds-roller div:nth-child(6):after {
    top: 68px;
    left: 24px;
  }
  .lds-roller div:nth-child(7) {
    animation-delay: -0.252s;
  }
  .lds-roller div:nth-child(7):after {
    top: 63px;
    left: 17px;
  }
  .lds-roller div:nth-child(8) {
    animation-delay: -0.288s;
  }
  .lds-roller div:nth-child(8):after {
    top: 56px;
    left: 12px;
  }
  @keyframes lds-roller {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

}


</style>
