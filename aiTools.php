<!DOCTYPE html>
<html  >
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="generator" content="Mobirise v5.2.0, mobirise.com">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">
    <link rel="shortcut icon" href="assets/images/thrive_logo_small.png" type="image/x-icon">
    <meta name="description" content="">
    
    
    <title>AI Tools</title>
    <link rel="stylesheet" href="styles/breastCancerTool.css">
    <link rel="stylesheet" href="styles/heartDisease.css">
    <link rel="stylesheet" href="assets/web/assets/mobirise-icons2/mobirise2.css">
    <link rel="stylesheet" href="assets/tether/tether.min.css">
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap-grid.min.css">
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap-reboot.min.css">
    <link rel="stylesheet" href="assets/dropdown/css/style.css">
    <link rel="stylesheet" href="assets/socicon/css/styles.css">
    <link rel="stylesheet" href="assets/theme/css/style.css">
    <link rel="preload" as="style" href="assets/mobirise/css/mbr-additional.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/mobirise/css/mbr-additional.css" type="text/css">

    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
 </head>

 <style>
      html, body {
        min-height: 100%;
      }
      body, div, form, input, select, textarea, p { 
          padding: 0;
          margin: 0;
          outline: none;
          line-height: 22px;
          font-family: 'Jost', sans-serif;
      }
      .item_label{
        font-weight: 700;
        font-size: 1.25rem;
        color:#ea0faa;
        margin-bottom: 10px;
        margin-top: 20px;
      }
      h1 {
          position: absolute;
          margin: 0;
          font-size: 38px;
          color: #fff;
          z-index: 2;
      }
      .testbox {
          display: flex;
          justify-content: center;
          align-items: center;
          height: inherit;
          padding: 20px;
      }
      form {
          width: 100%;
          padding: 20px;
          border-radius: 6px;
          background: #fff;
          box-shadow: 0 0 25px 0 #eeeeee;
          border: 1px solid #6592e6;
      }
      .banner {
          position: relative;
          height: 210px;
          background-image: url("assets/images/heart_disease.jpg");  
          background-size: cover;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
      }
      .banner::after {
          content: "";
          background-color: rgba(0, 0, 0, 0.3); 
          position: absolute;
          width: 100%;
          height: 100%;
      }
      input, select, textarea {
          margin-bottom: 10px;
          border: 1px solid #ccc;
          border-radius: 3px;
      }
      input {
          width: calc(100% - 10px);
          padding: 5px;
      }
      input[type="date"] {
        padding: 4px 5px;
      }
      select {
        width: 100%;
          padding: 7px 0;
          background: transparent;
      }
      textarea {
          width: calc(100% - 12px);
          padding: 5px;
      }
      .item:hover p, .item:hover i, .question:hover p, .question label:hover, input:hover::placeholder {
        color: #ea0faa;
      }
      .item input:hover, .item select:hover, .item textarea:hover {
          border: 1px solid transparent;
          box-shadow: 0 0 6px 0 #ea0faa;
      }
      .item {
          position: relative;
          margin: 10px 0;
      }
      input[type="date"]::-webkit-inner-spin-button {
        display: none;
      }
      .item i, input[type="date"]::-webkit-calendar-picker-indicator {
          position: absolute;
          font-size: 20px;
          color: #a9a9a9;
      }
      .item i {
          right: 2%;
          top: 30px;
          z-index: 1;
      }
      [type="date"]::-webkit-calendar-picker-indicator {
          right: 1%;
          z-index: 2;
          opacity: 0;
          cursor: pointer;
      }
      input[type=radio], input[type=checkbox]  {
        display: none;
      }
      label.radio {
          position: relative;
          display: inline-block;
          margin: 5px 20px 15px 0;
          cursor: pointer;
      }
      .question span {
        margin-left: 30px;
      }
      label.radio:before {
          content: "";
          position: absolute;
          left: 0;
          width: 17px;
          height: 17px;
          border-radius: 50%;
          border: 2px solid #ccc;
      }
      input[type=radio]:checked + label:before, label.radio:hover:before {
        border: 2px solid #ea0faa;
      }
      label.radio:after {
          content: "";
          position: absolute;
          top: 6px;
          left: 5px;
          width: 8px;
          height: 4px;
          border: 3px solid #ea0faa;
          border-top: none;
          border-right: none;
          transform: rotate(-45deg);
          opacity: 0;
      }
      input[type=radio]:checked + label:after {
        opacity: 1;
      }
      .btn-block {
          margin-top: 10px;
          text-align: center;
      }
      button {
          width: 30%;
          margin:0px 35% !important;
          padding: 10px;
          border: none;
          border-radius: 5px; 
          background: #ea0faa;
          font-size: 16px;
          color: #fff;
          cursor: pointer;
      }
      button:hover {
        background: #b52ed1;
      }
      @media (min-width: 568px) {
          .name-item, .city-item {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
          }
          .name-item input, .city-item input {
            width: calc(50% - 20px);
          }
          .city-item select {
            width: calc(50% - 8px);
          }
      }
    </style>
<body>
  
<section class="menu cid-s48OLK6784" once="menu" id="menu1-h">
    
    <nav class="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
        <div class="container-fluid">
            <div class="navbar-brand">
                <span class="navbar-logo">
                    <a href="index.php">
                        <img src="assets/images/thrive_logo.png" alt="Mobirise" style="height: 5rem;">
                    </a>
                </span>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav nav-dropdown" data-app-modern-menu="true">
                    <li class="nav-item">
                        <a class="nav-link link text-black display-4" href="index.php#features1-n">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link link text-black display-4" href="body.html">Body Care</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link link text-black display-4" href="mind.html">Mind Care</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link link text-black display-4" href="signup.php">Dashboard</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

   </section>

        <section class="info3 cid-smHa3xqxC6 mbr-parallax-background" id="info3-r" style="margin-top:30px; ">
            <div class="mbr-overlay" style="opacity: 0.6; background-color: rgb(200 13 125);">
                </div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="card col-12 col-lg-10">
                            <div class="card-wrapper">
                                <div class="card-box align-center">
                                    <h4 class="card-title mbr-fonts-style align-center mb-4 display-1"><strong style="font-family: 'Dancing Script', cursive;">AI Tools For Diagnosis</strong></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>



<section class="tabs content18 cid-smH7yzCdHX" id="tabs1-p">    
    <div class="container-fluid">
        <div class="row justify-content-center mt-4">
            <div class="col-12 col-md-9">
                <ul class="nav nav-tabs mb-4" role="tablist">
                    <li class="nav-item first mbr-fonts-style"><a class="nav-link mbr-fonts-style show active display-7" role="tab" data-toggle="tab" href="#tabs1-p_tab0" aria-selected="true"><strong>Breast Cancer Detection</strong></a></li>
                    <li class="nav-item"><a class="nav-link mbr-fonts-style active display-7" role="tab" data-toggle="tab" href="#tabs1-p_tab1" aria-selected="true"><strong> Heart Disease Prediction </strong></a></li>
                 </ul>
                
                <div class="tab-content">
                    <div id="tab1" class="tab-pane in active" role="tabpanel">
                        <div class="container">
                            <div class="row breast-tool">
                                <div class="col-md-8 " style=" margin: auto;">
                                    <p style="font-size: 20px;">
                                        We analyse the hispathological image i.e. images of glass tissue slides under a microscope, here tissue samples from lymph 
                                        nodes in order to detect breast cancer. We will be analysing tissues for:
                                    </p>
                                    <br/>
                                    <p style="font-size: 20px;">
                                        <strong>Invasive Ductal Carcinoma</strong> -  This is the most common subtype of all breast cancers. Almost 80% of 
                                        diagnosed breast cancers are of this subtype.
                                    </p> 
                                    <p style="font-size: 20px;">
                                        <strong>Metastatic Cancer</strong> -  A metastatic cancer or metastatic tumor is one that has spread from the site where 
                                        it started into different area/s of the body.
                                    </p>
                                    <br/><br/>
                                    <ul class="arrow" style="list-style-image: url('assets/images/icon.png');">
                                        <li>
                                            <span style="top:-40px; position:relative;">
                                            <p class="breast-step" style="font-size: 23px;">Upload Histopathological Image</p>
                                            <p>
                                                Click on the 'Choose Files' button and select a single image of 200x200 for the algorithm. Use jpeg, jpg or png format.
                                            </p>
                                            </span>
                                        </li>
                                        <li>
                                            <span style="top:-40px; position:relative;">
                                            <p class="breast-step" style="font-size: 23px;">Select Prediction Type</p>
                                            <p>One of these shall be selected for you by default, you may choose between <strong>Metastatic Cancer</strong> and 
                                                <strong>Invasive Ductal Carcinoma</strong>
                                            </p>
                                            </span>
                                        </li>
                                        <li>
                                            <span style="top:-40px; position:relative;">
                                            <p class="breast-step" style="font-size: 23px;">Check Results</p>
                                            <p>Your results should load automatically. </p>
                                        </li>
                                        </span>
                                    </ul>
                                </div>
                                <div class="col-md-4" style=" margin: auto;">
                                    <img id="selected-image"  width="200"  src="assets/normal.png" alt=""> 
                                    <div class="progress-bar">
                                        Ai is Loading...
                                    </div>
                                    <h5>Results</h5>
                                    <ol id='prediction-list'></ol>
                                     <div class="question">
                                      <p>What would you like to detect</p>
                                      <div class="question-answer">
                                        <div>
                                          <input id='met_cancer_input' type="radio" name="model_type" value="metastatic_cancer" checked/>
                                          <label for="met_cancer_input" class="radio"><span> Metastatic Cancer </span></label>
                                        </div>
                                        <div>
                                          <input id='breast_cancer_input' type="radio" name="model_type" value="breast_cancer"/>
                                          <label for="breast_cancer_input" class="radio"><span> Invasive Ductal Carcinoma </span></label>
                                        </div>
                                      </div>
                                    </div>
                                    <p>jpeg or png</p>
                                    <div style="display:flex">
                                    <div class="hide">
                                        <input  id="image-selector" type="file" multiple>
                                    </div>
                                    <div class="hide"style="display:none">
                                        <button class="main-button" style="background:#0088e8" id="predict-button">Predict</button>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
                
                    <div id="tab2" class="tab-pane" role="tabpanel">
                        <div class="row">
                            <div class="col-md-12">
                                <p class="mbr-text mbr-fonts-style display-7">
                                    Heart is a crucial and necessary organ of the body, and heart risk is at an all time high in India. In accordance with the World 
                                    Health Organization, <strong>India accounts for one-fifth of these deaths worldwide especially in younger population</strong>. The results of Global
                                     Burden of Disease study state age-standardized Cardiovascular Disease death rate of 272 per 100000 population in India which is much higher than that
                                    of global average of 235.
                                    <br/><br/>
                                    That too when there are no structured data collection methods regarding the cardiac mortality and morbidity for Indian subcontinent,
                                    and also majority of deaths happen at home without knowing the exact cause of death.
                                    <em>We contribute to preventing this by making heart disease identification more accessible</em>
                                </p> <br/>
                                <p class="mbr-text mbr-fonts-style display-7">
                                   We determine the risk of heart disease on the basis of life and health factors below
                                </p>
                                <div class="testbox">
                                  <form method="post" class="heart-disease">
                                    <div class="banner">
                                      <h1>Heart Disease Prediction</h1>
                                    </div>
                                    <div class="item">
                                      <div class="item_label">Age</div>
                                        <input type="number" name="age" placeholder="Enter age" />
                                    </div>

                                    <div class="question">
                                      <div class="item_label">Gender</div>
                                      <div class="question-answer">
                                        <div>
                                          <input type="radio" value="1" id="radio_1" name="gender"/>
                                          <label for="radio_1" class="radio"><span>Male</span></label>
                                        </div>
                                        <div>
                                          <input type="radio" value="0" id="radio_2" name="gender"/>
                                          <label for="radio_2" class="radio"><span>Female</span></label>
                                        </div>
                                      </div>
                                    </div>

                                    <div class="item">
                                        <div class="item_label">Type of Chest pain experienced</div>
                                        <select required name="cp">
                                          <option value="">Choose</option>
                                          <option value="0" >Typical Angina</option>
                                          <option value="1">Atypical Angina</option>
                                          <option value="2">Non Anginal Pain</option>
                                          <option value="3">Asymptomatic</option>
                                        </select>
                                    </div>

                                    <div>
                                        <div class="name-item">
                                            <input type="number" name="trestbps" placeholder="Enter resting blood pressure" />
                                            <input type="number" name="chol" placeholder="Enter Serum Cholesterol (mg/dL)" />
                                        </div>
                                    </div>

                                    <div class="question">
                                      <div class="item_label"> Is Fasting Blood Sugar > 120 mg/dL ?</div>
                                      <div class="question-answer">
                                        <div>
                                          <input type="radio" value="1" id="fbs_1" name="fbs"/>
                                          <label for="fbs_1" class="radio"><span>Yes</span></label>
                                        </div>
                                        <div>
                                          <input type="radio" value="0" id="fbs_0" name="fbs"/>
                                          <label for="fbs_0" class="radio"><span>No</span></label>
                                        </div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="item_label">Resting Electrocardiographic Results:</div>
                                        <select required  name="re">
                                          <option value="">Choose</option>
                                          <option value="0">Normal</option>
                                          <option value="1">ST-T Wave Abnormality</option>
                                          <option value="2">Left Ventricular Hypertrophy</option>
                                        </select>
                                    </div>

                                    <div class="item">
                                      <div class="item_label">Maximum Heart Rate Achieved</div>
                                        <input type="number" name="thalach" placeholder="Enter Maximum Heart Rate Achieved" />
                                    </div>

                                    <div class="question">
                                      <div class="item_label">Exercise Induced Angina</div>
                                      <div class="question-answer">
                                        <div>
                                          <input type="radio" value="1" id="exang_1" name="ex"/>
                                          <label for="exang_1" class="radio"><span>Yes</span></label>
                                        </div>
                                        <div>
                                          <input type="radio" value="0" id="exang_0" name="ex"/>
                                          <label for="exang_0" class="radio"><span>No</span></label>
                                        </div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="item_label"> ST Depression Induced By Exercise Relative To Rest (Oldpeak):</div>
                                        <input type="number" name="oldpeak" placeholder="Enter age" />
                                    </div>

                                    <div class="question">
                                      <div class="item_label"> The Slope Of The Peak Exercise ST Segment:</div>
                                      <div class="question-answer">
                                        <div>
                                          <input type="radio" value="0" id="slope_0" name="slope"/>
                                          <label for="slope_0" class="radio"><span>Upsloping</span></label>
                                        </div>
                                        <div>
                                          <input type="radio" value="1" id="slope_1" name="slope"/>
                                          <label for="slope_1" class="radio"><span>Flat</span></label>
                                        </div>
                                        <div>
                                          <input type="radio" value="2" id="slope_2" name="slope"/>
                                          <label for="slope_2" class="radio"><span>Downsloping</span></label>
                                        </div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="item_label">Number Of Major Vessels Colored By Fluoroscopy</div>
                                        <select required name="idk">
                                          <option value="">Choose</option>
                                          <option value="0" >0</option>
                                          <option value="1" >1</option>
                                          <option value="2">2</option>
                                          <option value="3">3</option>
                                        </select>
                                    </div>

                                    <div class="item">
                                      <div class="item_label">Thalassemia</div>
                                        <select required name="th">
                                          <option value="" >Choose</option>
                                          <option value="0">Normal</option>
                                          <option value="1">Fixed</option>
                                          <option value="2">Reversible Defect</option>
                                        </select>
                                    </div>
                                    
                                    <div class="btn-block" style="text-align: center;">
                                      <button type="submit" class="btn btn-primary display-4" href="/" name="heart">
                                        Predict
                                      </button>
                                    </div>
                                  </form>
                                </div>
                                <div class="prediction-result">
                                <?php
                                $json1=0;
    if(isset($_POST['heart'])){
       
      $o1= $_POST['age'];
      $o2= $_POST['gender'];
      $o3= $_POST['cp'];
      $o4= $_POST['trestbps'];
      $o5= $_POST['chol'];
      $o6= $_POST['fbs'];
      $o7= $_POST['re'];
      $o8= $_POST['thalach'];
      $o9= $_POST['ex'];
      $o10= $_POST['oldpeak'];
      $o11= $_POST['slope'];
      $o12= $_POST['idk'];
      $o13= $_POST['th'];
   
      
     
        $json1 =  file_get_contents('https://heart-disease-techblitz.herokuapp.com/heart', false, stream_context_create([
         'http' => [
             'method' => 'POST',
             'header'  => "Content-type: application/x-www-form-urlencoded",
             'content' => http_build_query([
            
         'age' => $o1,
         'sex'=> $o2,
         'cp'=> $o3,
         'trestbps'=> $o4,
         'chol' => $o5,
         'fbs'=> $o6,
         'restecg'=> $o7,
         'thalach'=> $o8,
         'exang'=> $o9,
         'oldpeak'=> $o10,
         'slope'=> $o11,
         'ca'=> $o12,
         'thal'=>  $o13
       
        // "age" => "21",
        // "sex"=> "1",
        // "cp"=> "1",
        // "trestbps"=> "82",
        // "chol" => "120",
        // "fbs"=> "0",
        // "restecg"=> "0",
        // "thalach"=> "80",
        // "exang"=> "5",
        // "oldpeak"=> "0",
        // "slope"=> "1",
        // "ca"=> "0",
        // "thal"=>  "3"



    //     'regular_periods' => 'no',
    // 'rapid_weight_gain'=> $o2,
    // 'excess_hair'=> 'y',
    // 'dark_patches'=> 'y',
    // 'pimples' => 'y',
    // 'depression_and_anxiety'=> 'y',
    // 'diabetic_hypertension_family_history'=> 'y',
    // 'body_weight_maintain_difficulty'=> 'y',
    // 'oily_skin'=> 'y',
    // 'hair_strength_loss'=> 'n',
    // 'eat_frequency'=> 'hm',
    // 'regular_excercise'=> 'y',
    // 'sleep_time'=> '3:00am',
    // 'wake_time'=> '7:30am',
    // 'hostel_stress'=> 'y',
    // 'personal_stress'=> 'y',
    // 'peer_pressure'=> 'y',
    // 'dietary_stress'=> 'y',
    // 'fast_food_frequency'=> 'y'
             ])
         ]
     ]));

    
     $yummy = 1;
         if ($yummy->prediction=='0') {
            echo "<p>You may not be at the risk of Heart Disease</p>";
         }
       
        elseif ($yummy->prediction =='1') {
            echo "<p>You may be at the risk of Heart Disease</p>";
        }

     }
     
   else{
         echo "<p>Please submit the form above to get a prediction.</p>";
   }
   
    // else {
    //     $yummy = json_decode($json1);
    //     if ($yummy->pcos=='mb n') {
    //        echo "<p>You may not be at the risk of PCOS</p>";
    //     }
       
    //     elseif ($yummy->pcos == 'mb y') {
    //        echo "<p>You may be at the risk of PCOS</p>";
    //     }
     
    //}


?>
                                    <!-- <p>Please submit the form above to get a prediction.</p> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="footer3 cid-s48P1Icc8J" once="footers" id="footer3-i"><div class="container">
        <div class="media-container-row align-center mbr-white">
            
            <div class="row social-row">
                <div class="social-list align-right pb-2">
                    <div class="soc-item">
                        <a href="https://github.com/AmanGuptaCoder/ITS-Hackathon" target="_blank">
                            <span class="mbr-iconfont mbr-iconfont-social socicon-github socicon"></span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row row-copirayt">
                <p class="mbr-text mb-0 mbr-fonts-style mbr-white align-center display-7">Made by Team C.O.D.E With ❤️&nbsp;</p>
            </div>
        </div>
    </div>
</section>


<a href="https://mobirise.site/e"></a>
<script src="assets/web/assets/jquery/jquery.min.js"></script>
<script src="assets/popper/popper.min.js"></script>
<script src="assets/tether/tether.min.js"></script>
<script src="assets/bootstrap/js/bootstrap.min.js"></script>
<script src="assets/smoothscroll/smooth-scroll.js"></script>
<script src="assets/parallax/jarallax.min.js"></script>
<script src="assets/mbr-tabs/mbr-tabs.js"></script>
<script src="assets/dropdown/js/nav-dropdown.js"></script>
<script src="assets/dropdown/js/navbar-dropdown.js"></script>
<script src="assets/touchswipe/jquery.touch-swipe.min.js"></script>
<script src="assets/theme/js/script.js"></script>

<!-- Load jQuery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        
<!-- Load TensorFlow.js -->
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@0.13.3/dist/tf.min.js"> </script>


<!-- Load the Javascript code -->
<script src="jscript/met_cancer_classes.js"></script>
<script src="jscript/breast_cancer_classes.js"></script>
<script src="jscript/app_startup_code.js"></script>
<script src="jscript/met_cancer_analyzer.js"></script>
<script src="jscript/breast_cancer_analyzer.js"></script>

</body>
</html>
