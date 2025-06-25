import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminUpdate = () => {
  const navigate = useNavigate();

  // Blog fields
  const [blogTitle, setBlogTitle] = useState("");
  const [blogSubtitle, setBlogSubtitle] = useState("");
  const [blogDescription, setBlogDescription] = useState("");
  const [blogImage, setBlogImage] = useState("");
  const [blogSlug, setBlogSlug] = useState("");
  const [blogDate, setBlogDate] = useState("");
  const [blogAuthor, setBlogAuthor] = useState("");
  const [blogContent, setBlogContent] = useState("");

  // YouTube
  const [youtubeLink, setYoutubeLink] = useState("");

  useEffect(() => {
    const isAdmin = sessionStorage.getItem("isAdmin");
    if (isAdmin !== "true") navigate("/admin");
  }, [navigate]);

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

    try {
      const res = await fetch("https://lawfirm-fawn.vercel.app:3001/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogData),
      });
      const data = await res.json();
      alert("✅ Blog submitted successfully!");
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
        const title = `Video ID: ${id}`; // Optional: You can allow admin to input title

        try {
            console.log({ title, url, id });
            const res = await fetch("https://lawfirm-fawn.vercel.app:3001/api/youtube", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, url, id}),
            });
            const data = await res.json();
            console.log("Response:", data);
            alert("✅ YouTube link submitted!");
            setYoutubeLink(""); // reset field
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

      {/* Main Content */}
      <div className="p-10 space-y-12">
        {/* Blog Section */}
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
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Submit Blog</button>
          </form>
        </section>

        {/* YouTube Section */}
        <section className="bg-white shadow rounded p-6">
          <h2 className="text-2xl font-semibold mb-4">Upload YouTube Link</h2>
          <form onSubmit={handleYoutubeSubmit} className="space-y-4">
            <input type="url" value={youtubeLink} onChange={(e) => setYoutubeLink(e.target.value)} className="w-full border px-3 py-2 rounded" placeholder="https://youtube.com/watch?v=..." required />
            <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Submit Link</button>
          </form>
        </section>

        {/* Logout */}
        <section className="bg-white shadow rounded p-6">
          <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700">Logout</button>
        </section>
      </div>
    </div>
  );
};

export default AdminUpdate;
