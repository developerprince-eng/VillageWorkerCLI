<?php
class Visitors_model extends CI_Model{
	public function __construct()
	{
		$this->load->database();
	}

	public function update()
	{
        $this->db->where('id', 1);
        $this->db->set('visits', 'visits+1', FALSE);
		$this->db->update('visitors');
	}

	public function get_visits($id = FALSE, $limit = FALSE, $offset = FALSE)
	{
		if($limit){
			$this->db->limit($limit, $offset);
		}
		if ($id === FALSE) {
			$this->db->order_by('id', 'DESC');
			$query = $this->db->get('visitors');
			return $query->result_array();
		}

		$query = $this->db->get_where('visitors', array('id' => $id));
		return $query->row_array();
	}
}
?>
