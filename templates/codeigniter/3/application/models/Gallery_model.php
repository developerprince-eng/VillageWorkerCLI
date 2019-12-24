<?php
class Gallery_model extends CI_Model{
	public function __construct()
	{
		$this->load->database();
	}

	public function insert($gallery)
	{
		$this->db->insert('gallery', $gallery);
	}
	

	public function get_gallery($gid = FALSE, $limit = FALSE, $offset = FALSE)
	{
		if($limit){
			$this->db->limit($limit, $offset);
		}
		if ($gid === FALSE) {
			$this->db->order_by('gid', 'DESC');
			$query = $this->db->get('gallery');
			return $query->result_array();
		}

		$query = $this->db->get_where('gallery', array('gid' => $gid));
		return $query->row_array();
	}

	public function get_gallery_8($gid = FALSE, $limit = FALSE, $offset = FALSE)
	{
		if($limit){
			$this->db->limit($limit, $offset);
		}
		if ($gid === FALSE) {
			$this->db->order_by('gid', 'DESC');
			$query = $this->db->get('gallery', 0, 8);
			return $query->result_array();
		}

		$query = $this->db->get_where('gallery', array('gid' => $gid));
		return $query->row_array();
	}

	public function create_gallery()
	{
		$gid = md5(url_title($this->input->post('name')));

		$data = array(
            'gid' => $gid,
			'name' => $this->input->post('name'),
			'category' => $this->input->post('category'),
		);

		return $this->db->insert('gallery', $data);
	}

	public function get_gallery_num()
	{
		return $this->db->count_all('gallery');
	}

	public function delete($id)
	{
		$this->db->where('gid', $id);
		$this->db->delete('gallery');
		return true;
	}

	public function approve($id)
	{
		$this->db->where('gid', $id);
		$this->db->update('gallery', array('approve' => 1));
		return true;
	}

	public function suspend($id)
	{
		$this->db->where('gid', $id);
		$this->db->update('gallery', array('approve' => 0));
		return true;
	}
}
?>
