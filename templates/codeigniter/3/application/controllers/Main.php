<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require '././vendor/autoload.php';
include_once '././loadenv.php';

class Main extends CI_Controller {
	public function index()
	{
		$data['home'] = $this->home_model->get_home();
		$data['events'] = $this->event_model->get_last_four_events();
		$data['sermon'] = $this->sermons_model->get_last_sermon();
		$data['testimonials'] = $this->testimonials_model->get_testimonials();
		$this->visitors_model->update();
		$this->load->view('templates/header');
		$this->load->view('main/index', $data);
		$this->load->view('templates/footer', $data);
	}

	public function about()
	{
		$data['home'] = $this->home_model->get_home();
		$data['about'] = $this->about_model->get_about();
		$data['staff'] = $this->staff_model->get_staff();
		$data['testimonials'] = $this->testimonials_model->get_testimonials();
		$this->load->view('templates/header');
		$this->load->view('main/about', $data);
		$this->load->view('templates/footer', $data);
	}

	public function contact()
	{
		$data['home'] = $this->home_model->get_home();
		$this->load->view('templates/header');
		$this->load->view('main/contact', $data);
		$this->load->view('templates/footer', $data);
	}

	public function events()
	{
		$data['home'] = $this->home_model->get_home();
		$data['events'] = $this->event_model->get_events();
		$this->load->view('templates/header');
		$this->load->view('main/events', $data);
		$this->load->view('templates/footer', $data);
	}

	public function ministry()
	{
		$data['home'] = $this->home_model->get_home();
		$this->load->view('templates/header');
		$this->load->view('main/ministry', $data);
		$this->load->view('templates/footer', $data);
	}

	public function sermons()
	{
		$data['home'] = $this->home_model->get_home();
		$data['sermons'] = $this->sermons_model->get_sermons();
		$this->load->view('templates/header');
		$this->load->view('main/sermons', $data);
		$this->load->view('templates/footer', $data);
	}
}
