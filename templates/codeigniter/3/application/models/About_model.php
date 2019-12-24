<?php
class About_model extends CI_Model{
	public function __construct()
	{
		$this->load->database();
	}

	public function insert($about)
	{
		$this->db->insert('about', $about);
	}

	public function get_by_id($id)
	{
		$this->db->where('aid', 0);
		$query = $this->db->get('about');
		return $query->result_array();
	}	

	public function get_about($aid = FALSE, $limit = FALSE)
	{
		if($limit){
			$this->db->limit($limit, FALSE);
		}
		if($aid === FALSE){
			$this->db->order_by('aid', 'DECS');
			$query = $this->db->get('about');
			return $query->result_array();
		}

		$query = $this->db->get_where('about', array('aid' => $aid));
		return $query->row_array();
	}

	public function update($about)
	{
		$this->db->where('aid', $about[0]);
		$this->db->update('about', $about);
		return true;
	}
	
	public function delete($id)
	{
		$this->db->where('aid', $id);
		$this->db->delete('about');
		return true;
	}

	public function approve($id)
	
	{
		$this->db->where('aid', $id);
		$this->db->update('about', array('approve' => 1));
		return true;
	}
	
	public function suspend($id){
		$this->db->where('aid', $id);
		$this->db->update('about', array('approve' => 0));
		return true;
	}
}
?>
