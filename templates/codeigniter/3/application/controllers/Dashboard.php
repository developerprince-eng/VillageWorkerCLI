<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dashboard extends CI_Controller {
	public function index()
	{
		$this->load->library('session');
		if(!$this->session->userdata('logged_in')){
			redirect('auth');
		}
		$data['sermons'] = $this->sermons_model->get_sermons();
		$data['visits'] = $this->visitors_model->get_visits();
		$data['events'] = $this->event_model->get_events();
		$this->load->view('templates/dashboard-header');
		$this->load->view('dashboard/index', $data);
		$this->load->view('templates/dashboard-footer');
	}

	//About
	public function about_list()
	{
		$this->load->library('session');
		if(!$this->session->userdata('logged_in')){
			redirect('auth');
		}
		$data['about'] = $this->about_model->get_about();
		$this->load->view('templates/dashboard-header');
		$this->load->view('dashboard/about_list', $data);
		$this->load->view('templates/dashboard-footer');
	}

	public function about_add()
	{
		$this->load->library('session');
		if(!$this->session->userdata('logged_in')){
			redirect('auth');
		}
		
		$this->load->view('templates/dashboard-header');
		$this->load->view('dashboard/about_add');
		$this->load->view('templates/dashboard-footer');
	}

	public function about_add_item()
	{
		$this->load->library('session');
		if(!$this->session->userdata('logged_in')){
			redirect('auth');
		}
		$this->load->helper(array('form','url'));

		$this->load->library('form_validation');
		$this->form_validation->set_rules('history', 'Brief History' ,'required');


		if($this->form_validation->run() == FALSE)
		{
			redirect('about-add');
		}else 
		{
			$about = array(
				
				'history' => $this->input->post('history'),
			);
			$this->load->model('about_model');
			$this->about_model->insert($about);
			redirect('about-list');
		}
	}

	public function about_update($id)
	{
		$this->load->library('session');
		if(!$this->session->userdata('logged_in')){
			redirect('auth');
		}
		$this->load->model('about_model');
		$data['about'] = $this->about_model->get_by_id($id);

		$this->load->view('templates/dashboard-header');
		$this->load->view('dashboard/about_edit', $data);
		$this->load->view('templates/dashboard-footer');
	}

	public function about_update_history()
	{
		$this->load->library('session');
		if(!$this->session->userdata('logged_in')){
			redirect('auth');
		}
		$this->load->helper(array('form','url'));
	
		$about = array(
			
			'history' => $this->input->post('history'),
		);
		$this->load->model('about_model');
		$this->about_model->insert($about);
		redirect('about-list');
		
	}

	public function about_delete_item($id)
	{
		$this->load->model('about_model');
		$this->about_model->delete($id);
		redirect('about-list');
	}

	public function about_suspend_item($id)
	{	
		$this->load->model('about_model');
		$this->about_model->suspend($id);
		redirect('about-list');
	}

	public function about_approve_item($id)
	{
		$this->load->model('about_model');
		$this->about_model->approve($id);
		redirect('about-list');

	}

	//Event
	public function events_list()
	{
		$this->load->library('session');
		if(!$this->session->userdata('logged_in')){
			redirect('auth');
		}
		$data['event'] = $this->event_model->get_events();
		$this->load->view('templates/dashboard-header');
		$this->load->view('dashboard/event_list', $data);
		$this->load->view('templates/dashboard-footer');
	}


	public function event_add()
	{
		$this->load->library('session');
		if(!$this->session->userdata('logged_in')){
			redirect('auth');
		}
		
		$this->load->view('templates/dashboard-header');
		$this->load->view('dashboard/event_add');
		$this->load->view('templates/dashboard-footer');
	}

	public function event_add_item()
	{
		$this->load->library('session');
		if(!$this->session->userdata('logged_in')){
			redirect('auth');
		}
		$this->load->helper(array('form','url'));

		$this->load->library('form_validation');
		$this->form_validation->set_rules('name', 'Name', 'required');
		
		$config_image = array(
			'upload_path' => './static/images/img/events',
			'allowed_types' => 'jpg|jpeg|png|bmp',
			'create_thumb' => TRUE,
			'maintain_ratio' => TRUE,
			'overwrite' => TRUE,
			'max_size' => 2048,
			'max_width' => 4000,
			'max_height' => 4000,
			'filename' => url_title($this->input->post('userfile'))
		);

		$this->load->library('upload', $config_image);

		if($this->form_validation->run() === FALSE)
		{
			redirect('event-add');
		}else 
		{
			if($this->upload->do_upload('userfile'))
			{
				$file_name = $this->upload->data();
				$dayfrom = $this->input->post('dayfrom');
				$monthfrom = $this->input->post('monthfrom');
				$yearfrom = $this->input->post('yearfrom');
				$dayto = $this->input->post('dayto');
				$monthto = $this->input->post('monthto');
				$yearto = $this->input->post('yearto');
				$event = array(
					'name' => $this->input->post('name'),
					'brief' => $this->input->post('brief'),
					'description' => $this->input->post('description'),
					'datefrom' => $dayfrom.' '.$monthfrom.' '.$yearfrom,
					'dateto' => $dayto.' '.$monthto.' '.$yearto,
					'timefrom' => $this->input->post('timefrom'),
					'timeto' => $this->input->post('timeto'),
					'img_url' => $file_name['file_name'],
				);
				$this->load->model('event_model');
				$this->event_model->insert($event);
				redirect('events-list');
			}
		}
	}

	public function event_update($id)
	{
		$this->load->library('session');
		if(!$this->session->userdata('logged_in')){
			redirect('auth');
		}
		$this->load->model('event_model');
		$data['event'] = $this->event_model->get_by_id($id);

		$this->load->view('templates/dashboard-header');
		$this->load->view('dashboard/event_edit', $data);
		$this->load->view('templates/dashboard-footer');
	}


	public function event_update_item()
	{
		$this->load->library('session');
		if(!$this->session->userdata('logged_in')){
			redirect('auth');
		}
		$this->load->helper(array('form','url'));
		
		$config_image = array(
			'upload_path' => './static/images/img/events',
			'allowed_types' => 'jpg|jpeg|png|bmp',
			'create_thumb' => TRUE,
			'maintain_ratio' => TRUE,
			'overwrite' => TRUE,
			'max_size' => 2048,
			'max_width' => 1024,
			'max_height' => 786,
			'filename' => url_title($this->input->post('userfile'))
		);

		$this->load->library('upload', $config_image);

		
		if($this->upload->do_upload('userfile'))
		{
			$file_name = $this->upload->data();
			$dayfrom = $this->input->post('dayfrom');
			$monthfrom = $this->input->post('monthfrom');
			$yearfrom = $this->input->post('yearfrom');
			$dayto = $this->input->post('dayto');
			$monthto = $this->input->post('monthto');
			$yearto = $this->input->post('yearto');
			$event = array(
				'name' => $this->input->post('name'),
				'brief' => $this->input->post('brief'),
				'description' => $this->input->post('description'),
				'datefrom' => $dayfrom.' '.$monthfrom.' '.$yearfrom,
				'dateto' => $dayto.' '.$monthto.' '.$yearto,
				'timefrom' => $this->input->post('timefrom'),
				'timeto' => $this->input->post('timeto'),
				'img_url' => $file_name['file_name'],
			);
			$this->load->model('event_model');
			$this->event_model->update($event);
			redirect('events-list');
		}
		
	}

	public function event_delete_item($id)
	{
		$this->load->model('event_model');
		$this->event_model->delete($id);
		redirect('events-list');
	}

	public function event_suspend_item($id)
	{	
		$this->load->model('event_model');
		$this->event_model->suspend($id);
		redirect('events-list');
	}

	public function event_approve_item($id)
	{
		$this->load->model('event_model');
		$this->event_model->approve($id);
		redirect('events-list');
	}

	//Home
	public function home_list()
	{
		$this->load->library('session');
		if(!$this->session->userdata('logged_in')){
			redirect('auth');
		}
		$data['home'] = $this->home_model->get_home();
		$this->load->view('templates/dashboard-header');
		$this->load->view('dashboard/home_list', $data);
		$this->load->view('templates/dashboard-footer');
	}

	public function home_add()
	{
		$this->load->library('session');
		if(!$this->session->userdata('logged_in')){
			redirect('auth');
		}
		
		$this->load->view('templates/dashboard-header');
		$this->load->view('dashboard/home_add');
		$this->load->view('templates/dashboard-footer');
	}

	public function home_add_item()
	{
		$this->load->library('session');
		if(!$this->session->userdata('logged_in')){
			redirect('auth');
		}
		$this->load->helper(array('form','url'));

		$this->load->library('form_validation');
		$this->form_validation->set_rules('brief', 'Brief', 'required');


		if($this->form_validation->run() == FALSE)
		{
			redirect('home-add');
		}else 
		{
			$home = array(
				'brief' => $this->input->post('brief')
			);
			$this->load->model('home_model');
			$this->home_model->insert($home);
			redirect('home-list');
		
		}
	}

	public function home_update($id)
	{
		$this->load->library('session');
		if(!$this->session->userdata('logged_in')){
			redirect('auth');
		}
		$this->load->model('home_model');
		$data['home'] = $this->home_model->get_by_id($id);

		$this->load->view('templates/dashboard-header');
		$this->load->view('dashboard/home_edit', $data);
		$this->load->view('templates/dashboard-footer');
	}

	public function home_update_brief()
	{
		$this->load->library('session');
		if(!$this->session->userdata('logged_in')){
			redirect('auth');
		}
		$this->load->helper(array('form','url'));

		$this->load->library('form_validation');
		$this->form_validation->set_rules('brief', 'Brief', 'required');


		if($this->form_validation->run() == FALSE)
		{
			redirect('home-add');
		}else 
		{
			$home = array(
				'brief' => $this->input->post('brief')
			);
			$this->load->model('home_model');
			$this->home_model->update($home);
			redirect('home-list');
		
		}
	}
	public function home_delete_item($id)
	{
		$this->load->model('home_model');
		$this->home_model->delete($id);
		redirect('home-list');
	}

	public function home_suspend_item($id)
	{	
		$this->load->model('home_model');
		$this->home_model->suspend($id);
		redirect('home-list');
	}

	public function home_approve_item($id)
	{
		$this->load->model('home_model');
		$this->home_model->approve($id);
		redirect('home-list');
	}

	//Gallery
	public function gallery_list()
	{
		$this->load->library('session');
		if(!$this->session->userdata('logged_in')){
			redirect('auth');
		}
		$data['gallery'] = $this->gallery_model->get_gallery();
		$this->load->view('templates/dashboard-header');
		$this->load->view('dashboard/gallery_list', $data);
		$this->load->view('templates/dashboard-footer');
	}

	public function gallery_item_add()
	{
		$this->load->library('session');
		if(!$this->session->userdata('logged_in')){
			redirect('auth');
		}
		
		$this->load->view('templates/dashboard-header');
		$this->load->view('dashboard/gallery_item_add');
		$this->load->view('templates/dashboard-footer');
	}

	public function gallery_add_item()
	{
		$this->load->library('session');
		if(!$this->session->userdata('logged_in')){
			redirect('auth');
		}
		$this->load->helper(array('form','url'));

		$this->load->library('form_validation');
		$this->form_validation->set_rules('category', 'Category', 'required');

		$config_image = array(
			'upload_path' => './static/images/img/gallery',
			'allowed_types' => 'jpg|jpeg|png|bmp',
			'create_thumb' => TRUE,
			'maintain_ratio' => TRUE,
			'overwrite' => TRUE,
			'max_size' => 2048,
			'max_width' => 1024,
			'max_height' => 786,
			'filename' => url_title($this->input->post('userfile'))
		);

		$this->load->library('upload', $config_image);

		if($this->form_validation->run() === FALSE)
		{
			$this->load->view('templates/dashboard-header');
			$this->load->view('dashboard/event_add');
			$this->load->view('templates/dashboard-footer');
		}else 
		{
			if($this->upload->do_upload('userfile'))
			{
				$file_name = $this->upload->data();
				$gallery = array(
					'title' => $file_name['file_name'],
					'category' => $this->input->post('category')
				);
				$this->load->model('gallery_model');
				$this->gallery_model->insert($gallery);
				redirect('gallery-list');
			}
		}
	}

	public function gallery_delete_item($id)
	{
		$this->load->model('gallery_model');
		$this->gallery_model->delete($id);
		redirect('gallery-list');
	}

	public function gallery_suspend_item($id)
	{	
		$this->load->model('gallery_model');
		$this->gallery_model->suspend($id);
		redirect('gallery-list');
	}

	public function gallery_approve_item($id)
	{
		$this->load->model('gallery_model');
		$this->gallery_model->approve($id);
		redirect('gallery-list');
	}

	//News
	public function news_list()
	{
		$this->load->library('session');
		if(!$this->session->userdata('logged_in')){
			redirect('auth');
		}
		$data['news'] = $this->news_model->get_news();
		$this->load->view('templates/dashboard-header');
		$this->load->view('dashboard/news_list', $data);
		$this->load->view('templates/dashboard-footer');
	}

	public function news_add()
	{
		$this->load->library('session');
		if(!$this->session->userdata('logged_in')){
			redirect('auth');
		}
		
		$this->load->view('templates/dashboard-header');
		$this->load->view('dashboard/news_add');
		$this->load->view('templates/dashboard-footer');
	}

	public function news_add_item()
	{
		$this->load->library('session');
		if(!$this->session->userdata('logged_in')){
			redirect('auth');
		}
		$this->load->helper(array('form','url'));

		$this->load->library('form_validation');
		$this->form_validation->set_rules('title', 'Name', 'required');
		$this->form_validation->set_rules('brief', 'Brief Description', 'required');

		$config_image = array(
			'upload_path' => './static/images/img/news',
			'allowed_types' => 'jpg|jpeg|png|bmp',
			'create_thumb' => TRUE,
			'maintain_ratio' => TRUE,
			'overwrite' => TRUE,
			'max_size' => 2048,
			'max_width' => 1024,
			'max_height' => 786,
			'filename' => url_title($this->input->post('userfile'))
		);

		$this->load->library('upload', $config_image);

		if($this->form_validation->run() === FALSE)
		{
			$this->load->view('templates/dashboard-header');
			$this->load->view('dashboard/event_add');
			$this->load->view('templates/dashboard-footer');
		}else 
		{
			if($this->upload->do_upload('userfile'))
			{
				$file_name = $this->upload->data();
				$day = $this->input->post('day');
				$month = $this->input->post('month');
				$year = $this->input->post('year');
				$news = array(
					'title' => $this->input->post('title'),
					'brief' => $this->input->post('brief'),
					'content' => $this->input->post('content'),
					'date' => $day.' '.$month.' '.$year,
					'time' => $this->input->post('time'),
					'img_url' => $file_name['file_name'],
				);
				$this->load->model('news_model');
				$this->news_model->insert($news);
				redirect('news-list');
			}
		}
	}

	public function news_delete_item($id)
	{
		$this->load->model('news_model');
		$this->news_model->delete($id);
		redirect('news-list');
	}

	public function news_suspend_item($id)
	{	
		$this->load->model('news_model');
		$this->news_model->suspend($id);
		redirect('news-list');
	}

	public function news_approve_item($id)
	{
		$this->load->model('news_model');
		$this->news_model->approve($id);
		redirect('news-list');
	}

	//Sermons
	public function sermons_list()
	{
		$this->load->library('session');
		if(!$this->session->userdata('logged_in')){
			redirect('auth');
		}
		$data['sermons'] = $this->sermons_model->get_sermons();
		$this->load->view('templates/dashboard-header');
		$this->load->view('dashboard/sermons_list', $data);
		$this->load->view('templates/dashboard-footer');
	}

	public function sermon_add()
	{
		$this->load->library('session');
		if(!$this->session->userdata('logged_in')){
			redirect('auth');
		}
		
		$this->load->view('templates/dashboard-header');
		$this->load->view('dashboard/sermon_add');
		$this->load->view('templates/dashboard-footer');
	}

	public function sermons_add_item()
	{
		$this->load->library('session');
		if(!$this->session->userdata('logged_in')){
			redirect('auth');
		}
		$this->load->helper(array('form','url'));

		$this->load->library('form_validation');
		$this->form_validation->set_rules('title', 'Name', 'required');

		$config_image = array(
			'upload_path' => './static/pdf/sermons',
			'allowed_types' => 'pdf',
			'overwrite' => TRUE,
			'max_size' => 2048,
			'filename' => url_title($this->input->post('userfile'))
		);

		$this->load->library('upload', $config_image);

		if($this->form_validation->run() === FALSE)
		{
			redirect('sermon_add');
		}else 
		{
			if($this->upload->do_upload('userfile'))
			{
				$file_name = $this->upload->data();
				$day = $this->input->post('day');
				$month = $this->input->post('month');
				$year = $this->input->post('year');
				$sermon = array(
					'title' => $this->input->post('title'),
					'preacher' => $this->input->post('preacehr'),
					'content' => $this->input->post('content'),
					'date' => $day.' '.$month.' '.$year,
					'pdf_url' => $file_name['file_name'],
				);
				$this->load->model('sermons_model');
				$this->sermons_model->insert($sermon);
				redirect('sermons-list');
			}
		}
	}

	public function sermons_update($id)
	{
		$this->load->library('session');
		if(!$this->session->userdata('logged_in')){
			redirect('auth');
		}
		$this->load->model('sermons_model');
		$data['sermons'] = $this->home_model->get_by_id($id);

		$this->load->view('templates/dashboard-header');
		$this->load->view('dashboard/sermons_edit', $data);
		$this->load->view('templates/dashboard-footer');
	}

	public function sermons_update_single()
	{
		$this->load->library('session');
		if(!$this->session->userdata('logged_in')){
			redirect('auth');
		}
		$this->load->helper(array('form','url'));

		$this->load->library('form_validation');
		$this->form_validation->set_rules('title', 'Name', 'required');

		$config_image = array(
			'upload_path' => './static/pdf/sermons',
			'allowed_types' => 'pdf',
			'overwrite' => TRUE,
			'max_size' => 2048,
			'filename' => url_title($this->input->post('userfile'))
		);

		$this->load->library('upload', $config_image);
	
		if($this->upload->do_upload('userfile'))
		{
			$file_name = $this->upload->data();
			$day = $this->input->post('day');
			$month = $this->input->post('month');
			$year = $this->input->post('year');
			$sermon = array(
				'title' => $this->input->post('title'),
				'preacher' => $this->input->post('preacehr'),
				'content' => $this->input->post('content'),
				'date' => $day.' '.$month.' '.$year,
				'pdf_url' => $file_name['file_name'],
			);
			$this->load->model('sermons_model');
			$this->sermons_model->update($sermon);
			redirect('sermons-list');
		}
	}

	public function sermons_delete_item($id)
	{
		$this->load->model('sermons_model');
		$this->sermons_model->delete($id);
		redirect('sermons-list');
	}

	public function sermons_suspend_item($id)
	{	
		$this->load->model('sermons_model');
		$this->sermons_model->suspend($id);
		redirect('sermons-list');
	}

	public function sermons_approve_item($id)
	{
		$this->load->model('sermons_model');
		$this->sermons_model->approve($id);
		redirect('sermons-list');
	}

	//Staff
	public function staff_list()
	{
		$this->load->library('session');
		if(!$this->session->userdata('logged_in')){
			redirect('auth');
		}
		$data['staff'] = $this->staff_model->get_staff();
		$this->load->view('templates/dashboard-header');
		$this->load->view('dashboard/staff_list', $data);
		$this->load->view('templates/dashboard-footer');
	}

	public function staff_add()
	{
		$this->load->library('session');
		if(!$this->session->userdata('logged_in')){
			redirect('auth');
		}
		$this->load->view('templates/dashboard-header');
		$this->load->view('dashboard/staff_add');
		$this->load->view('templates/dashboard-footer');
	}

	public function staff_add_item()
	{
		$this->load->library('session');
		if(!$this->session->userdata('logged_in')){
			redirect('auth');
		}
		$this->load->helper(array('form','url'));

		$this->load->library('form_validation');
		$this->form_validation->set_rules('name', 'Name', 'required');
		
// 		$config_image = array(
// 			'upload_path' => './static/images/img/staff',
// 			'allowed_types' => 'jpg|jpeg|png|bmp',
// 			'create_thumb' => TRUE,
// 			'maintain_ratio' => TRUE,
// 			'overwrite' => TRUE,
// 			'max_size' => 2048,
// 			'max_width' => 1024,
// 			'max_height' => 786,
// 			'filename' => url_title($this->input->post('userfile'))
// 		);

// 		$this->load->library('upload', $config_image);

		if($this->form_validation->run() === FALSE)
		{
			$this->load->view('templates/dashboard-header');
			$this->load->view('dashboard/staff_add');
			$this->load->view('templates/dashboard-footer');
		}else 
		{
			$staff = array(
				'name' => $this->input->post('name'),
				'title' => $this->input->post('title'),
				'brief' => $this->input->post('brief')
			);
			$this->load->model('staff_model');
			$this->staff_model->insert($staff);
			redirect('staff-list');
		}
	}


	public function staff_update($id)
	{
		$this->load->library('session');
		if(!$this->session->userdata('logged_in')){
			redirect('auth');
		}
		$this->load->model('staff_model');
		$data['staff'] = $this->staff_model->get_by_id($id);

		$this->load->view('templates/dashboard-header');
		$this->load->view('dashboard/staff_edit', $data);
		$this->load->view('templates/dashboard-footer');
	}

	public function staff_update_member()
	{
		$this->load->library('session');
		if(!$this->session->userdata('logged_in')){
			redirect('auth');
		}
		$this->load->helper(array('form','url'));

		$config_image = array(
			'upload_path' => './static/images/img/staff',
			'allowed_types' => 'jpg|jpeg|png|bmp',
			'create_thumb' => TRUE,
			'maintain_ratio' => TRUE,
			'overwrite' => TRUE,
			'max_size' => 2048,
			'max_width' => 1024,
			'max_height' => 786,
			'filename' => url_title($this->input->post('userfile'))
		);

		$this->load->library('upload', $config_image);
		
		if($this->upload->do_upload('userfile'))
		{
			$file_name = $this->upload->data();

			$staff = array(
				'name' => $this->input->post('name'),
				'title' => $this->input->post('title'),
				'brief' => $this->input->post('brief'),
				'img_url' => $file_name['file_name'],
			);
			$this->load->model('staff_model');
			$this->staff_model->update($staff);
			redirect('staff-list');
		}
		
	}

	public function staff_delete_item($id)
	{
		$this->load->model('staff_model');
		$this->staff_model->delete($id);
		redirect('staff-list');
	}

	public function staff_suspend_item($id)
	{	
		$this->load->model('staff_model');
		$this->staff_model->suspend($id);
		redirect('staff-list');
	}

	public function staff_approve_item($id)
	{
		$this->load->model('staff_model');
		$this->staff_model->approve($id);
		redirect('staff-list');
	}

	//Testimonials
	public function testimonials_list()
	{
		$this->load->library('session');
		if(!$this->session->userdata('logged_in')){
			redirect('auth');
		}
		$data['testimonials'] = $this->testimonials_model->get_testimonials();
		$this->load->view('templates/dashboard-header');
		$this->load->view('dashboard/testimonials_list', $data);
		$this->load->view('templates/dashboard-footer');
	}

	public function testimonial_add()
	{
		$this->load->library('session');
		if(!$this->session->userdata('logged_in')){
			redirect('auth');
		}
		
		$this->load->view('templates/dashboard-header');
		$this->load->view('dashboard/testimonials_add');
		$this->load->view('templates/dashboard-footer');
	}

	public function testimonial_add_item()
	{
		$this->load->library('session');
		if(!$this->session->userdata('logged_in')){
			redirect('auth');
		}
		$this->load->helper(array('form','url'));

		$this->load->library('form_validation');
		$this->form_validation->set_rules('name', 'Name','required');


		if($this->form_validation->run() === FALSE)
		{
			redirect('testimonial-add');
		}else 
		{
			$testimony = array(
				'name' => $this->input->post('name'),
				'testimony' => $this->input->post('testimony')
			);
			$this->load->model('testimonials_model');
			$this->testimonials_model->insert($testimony);
			redirect('testimonials-list');
		}
	}

	public function testimonial_update($id)
	{
		$this->load->library('session');
		if(!$this->session->userdata('logged_in')){
			redirect('auth');
		}
		$this->load->model('testimonials_model');
		$data['test'] = $this->testimonials_model->get_by_id($id);

		$this->load->view('templates/dashboard-header');
		$this->load->view('dashboard/testimonial_edit', $data);
		$this->load->view('templates/dashboard-footer');
	}

	public function testimonial_update_single($test)
	{
		$this->load->model('testimonials_model');
		$this->testimonials_model->update($test);
		redirect('testimonials-list');
	}

	public function testimonial_delete_item($id)
	{
		$this->load->model('testimonials_model');
		$this->testimonials_model->delete($id);
		redirect('testimonials-list');
	}

	public function testimonial_suspend_item($id)
	{	
		$this->load->model('testimonials_model');
		$this->testimonials_model->suspend($id);
		redirect('testimonials-list');
	}

	public function testimonial_approve_item($id)
	{
		$this->load->model('testimonials_model');
		$this->testimonials_model->approve($id);
		redirect('testimonials-list');

	}
}
