import { useState, useEffect } from 'react';
import '../styles/PostHistory.css';
import { API_ENDPOINTS } from '../config/api';

function PostHistory() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(API_ENDPOINTS.RECENT_POSTS);
      if (!response.ok) throw new Error('Failed to fetch posts');
      
      const data = await response.json();
      setPosts(data.posts.slice(0, 5)); // Get latest 5 posts
    } catch (error) {
      console.error('Failed to fetch posts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString, isScheduledTime = false) => {
    const date = new Date(dateString);
    // If it's a scheduled time, convert from UTC to IST by subtracting 5.5 hours
    const adjustedDate = isScheduledTime 
        ? new Date(date.getTime() - (5.5 * 60 * 60 * 1000))
        : date;
        
    return adjustedDate.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="post-history">
      <h2>Recent Posts</h2>
      {isLoading ? (
        <p>Loading posts...</p>
      ) : (
        <div className="posts-list">
          {posts.map((post) => (
            <div key={post._id} className="post-item">
              <p>{post.content}</p>
              <div className="post-meta">
                <span className={`status ${post.status}`}>
                  {post.status}
                </span>
                {post.scheduledTime && (
                  <span className="scheduled-time">
                    Scheduled: {formatDate(post.scheduledTime, true)}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PostHistory; 