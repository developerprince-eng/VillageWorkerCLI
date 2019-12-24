<?php
class Home_model extends CI_Model{
	public function __construct(){
		$this->load->database();
	}

	public function get_home($hid = FALSE, $limit = FALSE){
		if($limit){
			$this->db->limit($limit, FALSE);
		}
		if($hid === FALSE){
			$this->db->order_by('hid', 'DESC');
			$query = $this->db->get('home');
			return $query->result_array();
		}

		$query = $this->db->get_where('home', array('hid' => $hid));
		return $query->row_array();
	}

	public function insert($brief)
	{
		$this->db->insert('home', $brief);
	}

	public function get_by_id($id)
	{
		$this->db->where('hid', $id);
		$query = $this->db->get('home');
		return $query->result_array();
	}	

	public function update($home)
	{
		$this->db->where('hid', $home[0]);
		$this->db->update('home', $home);
		return true;
	}

	public function delete($id)
	{
		$this->db->where('hid', $id);
		$this->db->delete('home');
		return true;
	}
	
	public function approve($id)
	{
		$this->db->where('hid', $id);
		$this->db->update('home', array('approve' => 1));
		return true;
	} 

	public function suspend($id)
	{
		$this->db->where('hid', $id);
		$this->db->update('home', array('approve' => 0));
		return true;
	}
} 
?>
