<?php
require '././vendor/autoload.php';

use Bcrypt\Bcrypt;


class User_model extends CI_Model{
	public function __construct()
	{
        $this->load->database();
	}
	
	public function login ()
	{
        $email = $this->input->post('email');
        $password = $this->input->post('password');
        $md5_password = md5($password);

        $query = $this->db->get_where('users', array('email' => $email));
        $result = $query->row_array();
        
        $bcrypt = new Bcrypt();
        if($bcrypt->verify($md5_password, $result['password'])){
            return $query->row_array();
        }else{
            return array();
        }
	}   
	
	public function register()
	{
        $bcrypt = new Bcrypt;

        $md5_password = md5($this->input->post('password'));
        $ciphertext = $bcrypt->encrypt($md5_password);
        $data = array(
                'email' => $this->input->post('email'),
                'password' => $ciphertext
        ); 
        return $this->db->insert('users', $data);
	}	
	
	public function get_user_num()
	{
		return $this->db->count_all('users');
    }
}
?>
