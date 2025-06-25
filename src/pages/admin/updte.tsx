import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminUpdate = () => {
  const navigate = useNavigate();

  // Blog states
  const [blogs, setBlogs] = useState([]);
  const [blogTitle, setBlogTitle] = useState("");
  const [blogSubtitle, setBlogSubtitle] = useState("");
  const [blogDescription, setBlogDescription] = useState("");
  const [blogImage, setBlogImage] = useState("");
  const [blogSlug, setBlogSlug] = useState("");
  const [blogDate, setBlogDate] = useState("");
  const [blogAuthor, setBlogAuthor] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [editingBlogId, setEditingBlogId] = useState<string | null>(null);

  // YouTube states
  const [youtubeLink, setYoutubeLink] = useState("");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const isAdmin = sessionStorage.getItem("isAdmin");
    if (isAdmin !== "true") navigate("/admin");
  }, [navigate]);

  useEffect(() => {
    fetch("https://lawfirm-15vz.onrender.com/api/blogs")
      .then((res) => res.json())
      .then(setBlogs);

    fetch("https://lawfirm-15vz.onrender.com/api/youtube")
      .then((res) => res.json())
      .then(setVideos);
  }, []);

  const resetBlogForm = () => {
    setBlogTitle("");
    setBlogSubtitle("");
    setBlogDescription("");
    setBlogImage("");
    setBlogSlug("");
    setBlogDate("");
    setBlogAuthor("");
    setBlogContent("");
    setEditingBlogId(null);
  };

  const handleBlogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const blogData = {
      title: blogTitle,
      subtitle: blogSubtitle,
      description: blogDescription,
      image: blogImage,
      slug: blogSlug,
      date: blogDate,
      author: blogAuthor,
      content: blogContent,
    };

    const url = editingBlogId
      ? `https://lawfirm-15vz.onrender.com/api/blogs/${editingBlogId}`
      : "https://lawfirm-15vz.onrender.com/api/blogs";
    const method = editingBlogId ? "PUT" : "POST";

    try {
      await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogData),
      });
      alert(`✅ Blog ${editingBlogId ? "updated" : "submitted"} successfully!`);
      resetBlogForm();
      const updated = await fetch("https://lawfirm-15vz.onrender.com/api/blogs").then((res) =>
        res.json()
      );
      setBlogs(updated);
    } catch (error) {
      console.error("Error submitting blog:", error);
      alert("❌ Failed to submit blog.");
    }
  };

  const handleYoutubeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = youtubeLink.trim();
    const match = url.match(/v=([a-zA-Z0-9_-]{11})/);

    if (!match) {
      alert("Invalid YouTube URL");
      return;
    }

    const id = match[1];
    const title = `Video ID: ${id}`;

    try {
      await fetch("https://lawfirm-15vz.onrender.com/api/youtube", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, url, id }),
      });
      alert("✅ YouTube link submitted!");
      setYoutubeLink("");
      const updated = await fetch("https://lawfirm-15vz.onrender.com/api/youtube").then((res) =>
        res.json()
      );
      setVideos(updated);
    } catch (error) {
      console.error("Error submitting YouTube link:", error);
      alert("❌ Failed to submit link.");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("isAdmin");
    navigate("/admin");
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/7793243/pexels-photo-7793243.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <h1 className="relative text-white text-4xl font-bold z-10">Admin Panel</h1>
      </div>

      <div className="p-10 space-y-12">
        {/* Blog Form */}
        <section className="bg-white shadow rounded p-6">
          <h2 className="text-2xl font-semibold mb-4">Update Blog Details</h2>
          <form onSubmit={handleBlogSubmit} className="space-y-4">
            <input type="text" placeholder="Title" value={blogTitle} onChange={(e) => setBlogTitle(e.target.value)} className="w-full border px-3 py-2 rounded" required />
            <input type="text" placeholder="Subtitle" value={blogSubtitle} onChange={(e) => setBlogSubtitle(e.target.value)} className="w-full border px-3 py-2 rounded" required />
            <textarea placeholder="Description" value={blogDescription} onChange={(e) => setBlogDescription(e.target.value)} className="w-full border px-3 py-2 rounded" rows={3} required />
            <input type="url" placeholder="Image URL" value={blogImage} onChange={(e) => setBlogImage(e.target.value)} className="w-full border px-3 py-2 rounded" required />
            <input type="text" placeholder="Slug" value={blogSlug} onChange={(e) => setBlogSlug(e.target.value)} className="w-full border px-3 py-2 rounded" required />
            <input type="date" value={blogDate} onChange={(e) => setBlogDate(e.target.value)} className="w-full border px-3 py-2 rounded" required />
            <input type="text" placeholder="Author" value={blogAuthor} onChange={(e) => setBlogAuthor(e.target.value)} className="w-full border px-3 py-2 rounded" required />
            <textarea placeholder="Content" value={blogContent} onChange={(e) => setBlogContent(e.target.value)} className="w-full border px-3 py-2 rounded" rows={8} required />
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              {editingBlogId ? "Update Blog" : "Submit Blog"}
            </button>
          </form>
        </section>

        {/* Blog List */}
        <section className="bg-white shadow rounded p-6">
          <h3 className="text-xl font-semibold mb-4">Existing Blogs</h3>
          <ul className="space-y-4">
            {blogs.map((blog: any) => (
              <li key={blog._id} className="border p-4 rounded">
                <h4 className="font-bold">{blog.title}</h4>
                <p>{blog.subtitle}</p>
                <div className="flex gap-4 mt-2">
                  <button
                    onClick={() => {
                      setEditingBlogId(blog._id);
                      setBlogTitle(blog.title);
                      setBlogSubtitle(blog.subtitle);
                      setBlogDescription(blog.description);
                      setBlogImage(blog.image);
                      setBlogSlug(blog.slug);
                      setBlogDate(blog.date);
                      setBlogAuthor(blog.author);
                      setBlogContent(blog.content);
                    }}
                    className="px-3 py-1 bg-yellow-500 text-white rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={async () => {
                      const confirm = window.confirm("Are you sure you want to delete this blog?");
                      if (!confirm) return;

                      await fetch(`https://lawfirm-15vz.onrender.com/api/blogs/${blog._id}`, {
                        method: "DELETE",
                      });
                      setBlogs(blogs.filter((b: any) => b._id !== blog._id));
                      alert("✅ Blog deleted successfully!");
                    }}
                    className="px-3 py-1 bg-red-600 text-white rounded"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* YouTube Form */}
        <section className="bg-white shadow rounded p-6">
          <h2 className="text-2xl font-semibold mb-4">Upload YouTube Link</h2>
          <form onSubmit={handleYoutubeSubmit} className="space-y-4">
            <input
              type="url"
              value={youtubeLink}
              onChange={(e) => setYoutubeLink(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              placeholder="https://youtube.com/watch?v=..."
              required
            />
            <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
              Submit Link
            </button>
          </form>
        </section>

        {/* YouTube List */}
        <section className="bg-white shadow rounded p-6">
          <h3 className="text-xl font-semibold mb-4">Uploaded YouTube Videos</h3>
          <ul className="space-y-4">
            {videos.map((video: any) => (
              <li key={video._id} className="border p-4 rounded">
                <p>{video.title}</p>
                <a href={video.url} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                  Watch
                </a>
                <button
                  onClick={async () => {
                    const confirm = window.confirm("Are you sure you want to delete this video?");
                    if (!confirm) return;

                    await fetch(`https://lawfirm-15vz.onrender.com/api/youtube/${video._id}`, {
                      method: "DELETE",
                    });
                    setVideos(videos.filter((v: any) => v._id !== video._id));
                    alert("✅ Video deleted successfully!");
                  }}
                  className="ml-4 px-3 py-1 bg-red-600 text-white rounded"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </section>

        {/* Logout */}
        <section className="bg-white shadow rounded p-6">
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </section>
      </div>
    </div>
  );
};

export default AdminUpdate;
