<?php
class Testimonials_model extends CI_MODEL{
	public function __construct()
	{
		$this->load->database();
	}

	public function insert($testimonials)
	{
		$this->db->insert('testimonials', $testimonials);
	}

	public function get_by_id($id)
	{
		$this->db->where('tid', $id);
		$query = $this->db->get('testimonials');
		return $query->result_array();
	}	

	public function get_last_four_testimonials($tid = FALSE, $limit = FALSE, $offset = FALSE)
	{
		if($limit){
			$this->db->limit($limit, $offset);
		}
		if ($tid === FALSE) {
			$this->db->order_by('tid', 'DESC');
			$query = $this->db->get('testimonials', 0, 4);
			return $query->result_array();
		}
		$query = $this->db->get_where('testimonials', array('tid' => $tid));
		return $query->row_array();
	}

	public function get_testimonials($tid = FALSE, $limit = FALSE, $offset = FALSE)
	{
		if($limit){
			$this->db->limit($limit, $offset);
		}
		if ($tid === FALSE) {
			$this->db->order_by('tid', 'DESC');
			$query = $this->db->get('testimonials');
			return $query->result_array();
		}
		$query = $this->db->get_where('testimonials', array('tid' => $tid));
		return $query->row_array();
	}


	public function get_testimonials_num()
	{
		return $this->db->count_all('testimonials');
	}

	public function update($test)
	{
		$this->db->where('tid', $test[0]);
		$this->db->update('testimonials', $test);
		return true;
	}
	
	public function delete($id)
	{
		$this->db->where('tid', $id);
		$this->db->delete('testimonials');
		return true;
	}

	public function approve($id)
	{
		$this->db->where('tid', $id);
		$this->db->update('testimonials', array('approve' => 1));
		return true;
	}
	
	public function suspend($id)
	{
		$this->db->where('tid', $id);
		$this->db->update('testimonials', array('approve' => 0));
		return true;
	}
} 

?>
