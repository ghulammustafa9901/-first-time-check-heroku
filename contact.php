<!DOCTYPE html>
<html lang="en">

	<!-- BEGIN HEAD -->
	<head>
		<meta charset="utf-8"/>
		<title> Template </title>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
	  <meta content="width=device-width, initial-scale=1" name="viewport"/>
	  <meta content="" name="description"/>
	  <meta content="" name="author"/>

	  <!-- PLUGIN STYLES -->
	  <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.css">
	  <link rel="stylesheet" type="text/css" href="assets/css/animate.css">
	  <link rel="stylesheet" type="text/css" href="assets/css/all.css">
	  <link rel="stylesheet" type="text/css" href="assets/css/swiper.css">

	  <!-- THEME STYLES -->
	  <link rel="stylesheet" type="text/css" href="assets/css/style.css">

	  <!-- Favicon -->
    <!-- <link rel="shortcut icon" href="favicon.ico"/> -->
	</head>
	<!-- END HEAD -->

<!-- BODY -->
<body>
	
	<!--========== HEADER ==========-->
	<header class="header">

		<!-- Navbar -->
		<nav class="navbar navbar-expand-lg navbar-light bg-light" role="navigation">
	    <div class="container my-2">
	    	<!-- Logo -->
	    	<span class="navbar-brand mb-0 mr-0">
		      <a href="index.html">
		      	<img src="assets/img/logo.png">
		      </a>
		    </span>
		    <!-- End Logo -->

		    <!-- Toggler Button -->
		    <button class="navbar-toggler nav-toggle" type="button" data-toggle="collapse" data-target="#a">
          <i class="navbar-toggler-icon"></i>
        </button>
		    <!-- End Toggler Button -->

		    <!-- Navbar Links -->
		    <div class="collapse navbar-collapse" id="a">
		      <ul class="navbar-nav ml-auto">
		        <li class="nav-item">
		          <a class="nav-link text-uppercase px-3 nav-link-active" href="index.php">
		            Home
		          </a>
		        </li>
		        <li class="nav-item">
		          <a class="nav-link text-uppercase px-3 nav-link-active" href="about.php">
		            About
		          </a>
		        </li>
		        <li class="nav-item">
		          <a class="nav-link text-uppercase px-3 nav-link-active" href="work.php">
		            Work
		          </a>
		        </li>
		        <li class="nav-item">
		          <a class="nav-link text-uppercase px-3 nav-link-active active" href="contact.php">
		            Contact
		          </a>
		        </li>
		      </ul>
		    </div>
		    <!-- End Navbar Links -->

	    </div>
	  </nav>
	  <!-- End Navbar -->

	</header>
	<!--========== END HEADER ==========-->

  <!--========== PAGE LAYOUT ==========-->

  <!-- Google Map -->
  <div id="map" class="map height-300"></div>
  <!-- End Google Map -->

  <!-- Contact List -->
  <div class="section-seperator">
    <div class="content container">
      <div class="row">
        <!-- Contact List -->
        <div class="col-lg-4 col-md-4 col-sm-12 sm-margin-b-20">
          <h4>
          	<a href="#">New York</a>
          	<span class="text-uppercase mt-2" style="display: block;">
            	Head Office
            </span>
          </h4>
          <p>
          	Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor
          </p>
          <ul class="list-unstyled contact-list">
            <li>
            	<i class="mr-2 color-base icon-call-out fa fa-phone"></i> 
            	1 012 3456 7890
            </li>
            <li>
            	<a href="mailto:hq@gmail.com">
            		<i class="mr-2 color-base icon-envelope fa fa-envelope"></i> hq@gmail.com
            	</a>
            </li>
          </ul>
        </div>
        <!-- End Contact List -->

        <!-- Contact List -->
        <div class="col-lg-4 col-md-4 col-sm-12 sm-margin-b-20">
          <h4>
          	<a href="#">London</a>
          	<span class="text-uppercase mt-2" style="display: block;">
	          	Operation
	          </span>
	        </h4>
          <p>
          	Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor
          </p>
          <ul class="list-unstyled contact-list">
            <li>
            	<i class="mr-2 color-base icon-call-out fa fa-phone"></i>
            	44 77 3456 7890
            </li>
            <li>
            	<a href="mailto:operation@gmail.com">
            		<i class="mr-2 color-base icon-envelope fa fa-envelope"></i> operation@gmail.com
            	</a>
            </li>
          </ul>
        </div>
        <!-- End Contact List -->

        <!-- Contact List -->
        <div class="col-lg-4 col-md-4 col-sm-12 sm-margin-b-20">
          <h4>
          	<a href="#">Singapore</a>
          	<span class="text-uppercase mt-2" style="display: block;">
          		Finance
          	</span>
          </h4>
          <p>
          	Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor
          </p>
          <ul class="list-unstyled contact-list">
            <li>
            	<i class="mr-2 color-base icon-call-out fa fa-phone"></i>
            	50 012 456 7890
            </li>
            <li>
            	<a href="mailto:finance@gmail.com">
            		<i class="mr-2 color-base icon-envelope fa fa-envelope"></i>finance@gmail.com
            	</a>
            </li>
          </ul>
        </div>
        <!-- End Contact List -->

      </div>
      <!-- end row -->
    </div>
  </div>
  <!-- End Contact List -->

  <!-- Form -->
  <div class="section-seperator">
	  <div class="content container">
      <div class="row margin-b-30">
        <div class="col-lg-8 col-md-10 col-sm-12">
          <h2>Send Us A Note</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua enim minim veniam exercitation</p>
        </div>
      </div>
      <!--// end row -->

      <div class="row">
        <div class="col-lg-8 col-md-10 col-sm-12">
          <form method="post" name="form_Validation" onsubmit="return validation();">

            <div class="form-group">
              <input type="text" name="name" id="name" value="" class="form-control" placeholder="Name">
              <div id="erorrMegName"></div>
            </div>

            <div class="form-group">
              <input type="text" name="email" id="email" class="form-control" placeholder="Email">
              <div id="erorrMegEmail"></div>
            </div>

            <div class="form-group">
              <input type="text" name="phone" id="phone" class="form-control" placeholder="Phone">
              <div id="erorrMegPhone"></div>
            </div>

            <div class="form-group">
              <textarea name="message" id="message" class="form-control" rows="5" placeholder="Message"></textarea>
              <div id="erorrMegMessage"></div>
            </div>

            <button type="submit" class="btn-style">Submit</button>
          </form>
        </div>
      </div>
      <!--// end row -->
	  </div>
  </div>
  <!-- End Form -->

  <!--========== END PAGE LAYOUT ==========-->

  <!--========== FOOTER ==========-->
  <footer class="footer">
    <!-- Links -->
    <div class="section-seperator">
      <div class="content container">
        <div class="row">

          <div class=" wow fadeInLeft col-lg-4 col-md-4 col-sm-6 sm-margin-b-30" data-wow-duration=".3" data-wow-delay=".3s">
            <!-- List -->
            <ul class="list-unstyled footer-list">
              <li class="footer-list-item">
              	<a href="index.html">Home</a>
              </li>
              <li class="footer-list-item">
              	<a href="about.html">About</a>
              </li>
              <li class="footer-list-item">
              	<a href="work.html">Work</a>
              </li>
              <li class="footer-list-item">
              	<a href="contact.html">Contact</a>
              </li>
            </ul>
            <!-- End List -->
          </div>

          <div class="wow fadeInLeft col-lg-4 col-md-4 col-sm-6 sm-margin-b-30" data-wow-duration=".3" data-wow-delay=".2s">
            <!-- List -->
            <ul class="list-unstyled footer-list">
              <li class="footer-list-item">
              	<a href="javascript:void(0);">Twitter</a>
              </li>
              <li class="footer-list-item">
              	<a href="javascript:void(0);">Facebook</a>
              </li>
              <li class="footer-list-item">
              	<a href="javascript:void(0);">Instagram</a>
              </li>
              <li class="footer-list-item">
              	<a href="javascript:void(0);">YouTube</a>
              </li>
            </ul>
            <!-- End List -->
          </div>

          <div class="wow fadeInLeft col-lg-4 col-md-4 col-sm-6" data-wow-duration=".3" data-wow-delay=".1s">
            <!-- List -->
            <ul class="list-unstyled footer-list">
              <li class="footer-list-item">
              	<a href="javascript:void(0);" data-toggle="modal" data-target="#subscribeNews">Subscribe to Our Newsletter</a>
              </li>
              <li class="footer-list-item">
              	<a href="javascript:void(0);">Privacy Policy</a>
              </li>
              <li class="footer-list-item">
              	<a href="javascript:void(0);">Terms &amp; Conditions</a>
              </li>
            </ul>
            <!-- End List -->
          </div>

        </div>
        <!-- end row -->
      </div>
    </div>
    <!-- End Links -->

    <div class="modal fade pop-up" id="subscribeNews" role="dialog">
		  <div class="modal-dialog">
		    <div class="modal-content ">

		      <div class="modal-header">
		      	<button type="button" class="modal-btn" data-dismiss="modal">
		          <i class="icon-close fa fa-times"></i>
		        </button>
		      </div>

		      <div class="modal-body">
		        <h2 class="text-center mt-2">Subscribe to Our Newsletter</h2>
		        <form 
        			class="subscribeForm my-4 sm-margin-b-5" 
        			method="post" 
        			name="sub_Validation" 
        			onsubmit="return subValidation();">
		        	<div>
		        		<input type="text" name="subEmail" id="subEmail" class="form-control" placeholder="Email">
		        		<button type="submit" class="modal-btn-2">Subscribe!</button>
		        	</div>
		        	<div id="erorrmegsubemail"></div>
		        </form>
		      </div>

		    </div>
		  </div>
		</div>

    <!-- Copyright -->
    <div class="content container">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12">
          <img class="footer-logo sm-margin-b-20" src="assets/img/logo.png" alt="Acidus Logo">
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 text-right sm-text-center">
          <p class="margin-b-0">
          	<a class="fweight-700" href="http://keenthemes.com/preview/acidus/">Acidus</a>
          	Theme Powered by: <a class="fweight-700" href="http://www.keenthemes.com/">KeenThemes.com</a>
          </p>
        </div>
      </div>
      <!-- end row -->
    </div>
    <!-- End Copyright -->
  </footer>
  <!--========== END FOOTER ==========-->

  <!-- Back To Top -->
  <a href="javascript:void(0);" class="js-back-to-top back-to-top">Top</a>

	<!-- PLUGIN STYLES -->
  <script type="text/javascript" src="assets/js/jquery.js"></script>
  <script type="text/javascript" src="assets/js/bootstrap.js"></script>
  <script type="text/javascript" src="assets/js/wow.js"></script>
  <script type="text/javascript" src="assets/js/swiper.js"></script>
  <script type="text/javascript" src="assets/js/masonry.min.js"></script>
  <script type="text/javascript" src="assets/js/imagesloaded.min.js"></script>

  <!-- THEME STYLES -->
  <script type="text/javascript" src="assets/js/main.js"></script>
</body>
<!-- END BODY -->
</html>
