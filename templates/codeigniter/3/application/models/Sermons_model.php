<?php
class Sermons_model extends CI_Model{
	public function __construct()
	{
		$this->load->database();
	}

	public function insert($sermon)
	{
		$this->db->insert('sermons', $sermon);
	}

	public function get_last_sermon($sid = FALSE, $limit = FALSE, $offset = FALSE)
	{
		if($limit){
			$this->db->limit($limit, $offset);
		}
		if ($sid === FALSE) {
			$this->db->order_by('sid', 'DESC');
			$query = $this->db->get('sermons', 0, 1);
			return $query->result_array();
		}

		$query = $this->db->get_where('sermons', array('sid' => $sid));
		return $query->row_array();
	}

	
	public function get_sermons($sid = FALSE, $limit = FALSE, $offset = FALSE)
	{
		if($limit){
			$this->db->limit($limit, $offset);
		}
		if ($sid === FALSE) {
			$this->db->order_by('sid', 'DESC');
			$query = $this->db->get('sermons');
			return $query->result_array();
		}

		$query = $this->db->get_where('sermons', array('sid' => $sid));
		return $query->row_array();
	}

	public function create_sermon()
	{
		$sid = md5(url_title($this->input->post('name')));

		$data = array(
            'sid' => $sid,
			'title' => $this->input->post('title'),
			'content' => $this->input->post('content'),
            'preacher' => $this->input->post('preacher'),
            'date' => $this->input->post('date')
		);

		return $this->db->insert('sermons', $data);
	}

	public function get_by_id($id)
	{
		$this->db->where('sid', $id);
		$query = $this->db->get('sermons');
		return $query->result_array();
	}	

	public function get_sermons_num()
	{
		return $this->db->count_all('sermons');
	}

	public function update($sermon)
	{
		$this->db->where('sid', $sermon[0]);
		$this->db->update('sermons', $sermon);
		return true;
	}

	public function delete($id)
	{
		$this->db->where('sid', $id);
		$this->db->delete('sermons');
		return true;
	}

	public function approve($id)
	{
		$this->db->where('sid', $id);
		$this->db->update('sermons', array('approve' => 1));
		return true;
	}

	public function suspend($id)
	{
		$this->db->where('sid', $id);
		$this->db->update('sermons', array('approve' => 0));
		return true;
	}
}
?>
