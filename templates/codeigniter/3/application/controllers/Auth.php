<?php
defined('BASEPATH') OR exit('No direct script access allowed');


require '././vendor/autoload.php';

use Bcrypt\Bcrypt;


class Auth extends CI_Controller {
	public function index()
	{
		$this->load->view('auth/index');
	}
	public function login(){
		$this->load->library('form_validation');
		$this->load->library('session');
		$this->form_validation->set_rules('email', 'Email', 'required');
		$this->form_validation->set_rules('password', 'Password', 'required');

		if($this->form_validation->run() === FALSE){
			$this->load->view('auth/index');
		}else {
			
			$user = $this->user_model->login();

			if(!empty($user)){
				//Create Session
				$this->session->set_userdata('username', $user['username']);
				$this->session->set_userdata('name', $user['name']);
				$this->session->set_userdata('surname', $user['surname']);
				$this->session->set_userdata('profile_img', $user['profile_img']);
				$this->session->set_userdata('role', $user['role']);
				$this->session->set_userdata('logged_in', true);
				$this->session->set_flashdata('login_successful','Login in Successful');
				$data['user'] = $user;
				redirect('dashboard', $data);
			}else{
				$this->session->set_flashdata('login_failed','Login in invalid check email & password');
				redirect('auth');
			}

			redirect('dashboard');
			
		}
	}

	public function logout(){
		$this->load->library('session');
        $this->session->unset_userdata('logged_in');
        $this->session->unset_userdata('email');
		$this->session->unset_userdata('user_id');
		$this->session->unset_userdata('name');
		$this->session->unset_userdata('surname');
		$this->session->unset_userdata('role');
		$this->session->unset_userdata('username');
		
		$this->session->set_flashdata('user_logout','You are now logged out');
		redirect('auth');
	}
	
	public function register(){
		$this->load->library('form_validation');
		$this->load->library('session');
    	$this->form_validation->set_rules('email','Email','required');
		$this->form_validation->set_rules('password','Password', 'required');
		$this->form_validation->set_rules('password2','Confirm Password','matches[password]');

		if($this->form_validation->run() === FALSE){;
			$this->load->view('auth/register');
		}else{
			
			$this->user_model->register();

			$this->session->set_flashdata('user_registered','You are now Registered and Login');

			redirect('auth');
		}
	}
}
