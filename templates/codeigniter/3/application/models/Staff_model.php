<?php
class Staff_model extends CI_Model{
	public function __construct()
	{
		$this->load->database();
	}

	public function insert($staff)
	{
		$this->db->insert('staff', $staff);
	}


	public function get_by_id($id)
	{
		$this->db->where('sid', $id);
		$query = $this->db->get('staff');
		return $query->result_array();
	}	

	public function get_staff($sid = FALSE, $limit = FALSE)
	{
		if($limit){
			$this->db->limit($limit, FALSE);
		}
		if($sid === FALSE){
			$this->db->order_by('sid', 'DESC');
			$query = $this->db->get('staff');
			return $query->result_array();
		}

		$query = $this->db->get_where('staff', array('sid' => $sid));
		return $query->row_array();
	}

	public function update($staff)
	{
		$this->db->where('sid', $staff[0]);
		$this->db->update('staff', $staff);
		return true;
	}

	public function delete($id)
	{
		$this->db->where('sid', $id);
		$this->db->delete('staff');
		return true;
	}

	public function approve($id)
	{
		$this->db->where('sid', $id);
		$this->db->update('staff', array('approve' => 1));
		return true;
	}
	
	public function suspend($id)
	{
		$this->db->where('sid', $id);
		$this->db->update('staff', array('approve' => 0));
		return true;
	}
}
?>
