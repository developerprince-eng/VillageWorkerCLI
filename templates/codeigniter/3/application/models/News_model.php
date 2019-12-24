<?php
class News_model extends CI_Model{
	public function __construct()
	{
		$this->load->database();
	}

	public function insert($new)
	{
		$this->db->insert('news', $new);
	}

	public function get_news($nid = FALSE, $limit = FALSE, $offset = FALSE)
	{
		if($limit){
			$this->db->limit($limit, $offset);
		}
		if ($nid === FALSE) {
			$this->db->order_by('nid', 'DESC');
			$query = $this->db->get('news');
			return $query->result_array();
		}

		$query = $this->db->get_where('news', array('nid' => $nid));
		return $query->row_array();
	}

	public function create_new()
	{
		$nid = md5(url_title($this->input->post('name')));
		$day = $this->input->post('day');
		$month = $this->input->post('month');
		$year = $this->input->post('year');

		$data = array(
            'nid' => $nid,
			'title' => $this->input->post('title'),
			'brief' => $this->input->post('brief'),
            'content' => $this->input->post('content'),
            'date' => $day.' '.$month.' '.$year,
            'time' => $this->input->post('time')
		);

		return $this->db->insert('news', $data);
	}

	public function get_by_id($id)
	{
		$this->db->where('nid', $id);
		$query = $this->db->get('news');
		return $query->result_array();
	}	

	public function get_news_num()
	{
		return $this->db->count_all('news');
	}

	public function update($news)
	{
		$this->db->where('nid', $news[0]);
		$this->db->update('news', $news);
		return true;
	}

	public function delete($id)
	{
		$this->db->where('nid', $id);
		$this->db->delete('news');
		return true;
	}

	public function approve($id) 
	{
		$this->db->where('nid', $id);
		$this->db->update('news', array('approve' => 1));
		return true;
	}

	public function suspend($id)
	{
		$this->db->where('nid', $id);
		$this->db->update('news', array('approve' => 0));
		return true;
	}
}
?>
