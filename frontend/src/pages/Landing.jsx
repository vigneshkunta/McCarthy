import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
  InputGroup,
  Dropdown,
  Modal, // Import Modal
} from "react-bootstrap";
import {
  FaSearch,
  FaFilter,
  FaHeart,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa"; // Importing icons

export default function Landing() {
  const backgroundStyle = {
    borderRadius: "1.2rem",
    minHeight: "40vh",
    background: "linear-gradient(90deg, #7b2ff7 0%, #4facfe 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
    padding: "40px",
  };

  const trendingTools = [
    {
      name: "ChatGPT",
      description:
        "Advanced AI chatbot that can understand complex prompts and generate human-like text.",
      tags: ["Chatbot", "Writing", "Content Creation"],
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png", // Placeholder icon
    },
    {
      name: "DALL-E",
      description:
        "Create realistic images and art from natural language descriptions.",
      tags: ["Image Generation", "Art", "Design"],
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/DALL-E_logo.svg/1024px-DALL-E_logo.svg.png", // Placeholder icon
    },
    {
      name: "Midjourney",
      description:
        "Generate beautiful, detailed images from text prompts for illustration and concept art.",
      tags: ["Image Generation", "Art", "Design"],
      icon: "https://www.midjourney.com/assets/logo.png", // Placeholder icon
    },
    {
      name: "Copy.ai",
      description:
        "Create marketing copy, content, and ideas for your business in seconds.",
      tags: ["Copywriting", "Marketing", "Content"],
      icon: "https://global-uploads.webflow.com/62c0b490483c6c0964a2c510/62d985fc6f7f6314f8a9a463_favicon.png", // Placeholder icon
    },
    {
      name: "Murf.ai",
      description:
        "Convert text to natural-sounding speech with AI voices for videos and presentations.",
      tags: ["Voice", "Audio", "Text-to-Speech"],
      icon: "https://assets-global.website-files.com/618210332d787d55bfb200d7/6477e69c762512a20b925b41_murf-logo.svg", // Placeholder icon
    },
    {
      name: "GitHub Copilot",
      description:
        "AI pair programmer that helps you write better code by suggesting code snippets.",
      tags: ["Code", "Development", "Productivity"],
      icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png", // Placeholder icon
    },
  ];

  const categories = [
    { name: "Text Generation", tools: 156 },
    { name: "Image Generation", tools: 87 },
    { name: "Voice Generation", tools: 42 },
    { name: "Video Generation", tools: 35 },
    { name: "Code Generation", tools: 28 },
    { name: "Data Analysis", tools: 63 },
  ];

  // Define consistent color and font variables for easier management
  const primaryColor = "#5F2EEA";
  const primaryLight = "#9369DA ";
  const textColor = "#6A6A80";
  const backgroundColor = "#F8F8FC";
  const cardBackgroundColor = "#FFFFFF";
  const fontFamily = "Poppins, sans-serif"; // Changed font family

  // State to manage hover effects for "How McCarthy Works" cards
  const [hoveredHowItWorks, setHoveredHowItWorks] = useState(null);
  // State to manage hover effects for "Browse by Category" cards
  const [hoveredCategory, setHoveredCategory] = useState(null);
  // State to manage hover effects for "Why McCarthy?" cards
  const [hoveredWhyMcCarthy, setHoveredWhyMcCarthy] = useState(null);

 // State for filter modal visibility
const [showFilterModal, setShowFilterModal] = useState(false);

// State for selected filter options
const [selectedCategory, setSelectedCategory] = useState("");
const [selectedPrice, setSelectedPrice] = useState("");
const [selectedRating, setSelectedRating] = useState("");

const handleCloseFilterModal = () => setShowFilterModal(false);
const handleShowFilterModal = () => setShowFilterModal(true);

const handleApplyFilters = () => {
  console.log("Applying filters:", {
    selectedCategory,
    selectedPrice,
    selectedRating,
  });
  // Here you would typically apply these filters to your data
  handleCloseFilterModal();
};

const handleResetFilters = () => {
  setSelectedCategory("");
  setSelectedPrice("");
  setSelectedRating("");
};

return (
  // Main container div with overall styling
  <div
    style={{
      marginTop: "10vh",
      minHeight: "90vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      color: "#000",
      fontFamily: fontFamily,
      position: "relative",
      backgroundColor: backgroundColor,
    }}
  >
    {/* --- INLINE STYLE BLOCK FOR HOVER EFFECTS --- */}
    {/* This is generally not recommended for large applications but works for single-file requests */}
    <style>
      {` /* General transition for all cards for smooth effects */ .card {
        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
      } /* Hover effect for cards */ .card.hover-effect {
        transform: translateY(-5px); /* Lifts the card up by 5px */
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15) !important; /* A more pronounced shadow on hover */
      } `}
    </style>

    {/* Hero Section */}
    <div
      className="py-5 text-center d-flex align-items-center"
      style={{
        background: `linear-gradient(180deg,rgb(232, 226, 251) 30%, rgb(223, 231, 251) 100%)`, // Gradient background
        minHeight: "70vh",
        paddingTop: "8vh", // Adjusted padding top for hero section
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h1
              className="display-4 fw-bold mb-4"
              style={{ color: primaryColor, fontSize: "3.5rem" }}
            >
              There's an AI for Everything. <br /> Find it. Use it. Instantly.
            </h1>
            <p
              className="lead mb-5"
              style={{ color: textColor, fontSize: "1.25rem" }}
            >
              McCarthy is your one-stop marketplace to discover, compare, and
              use the best AI tools for any task.
            </p>
            <InputGroup
              className="mb-4 shadow mx-auto rounded-pill" // Added shadow and rounded-pill for shape
              style={{ maxWidth: "600px", overflow: "hidden" }}
            >
              <InputGroup.Text
                style={{
                  backgroundColor: cardBackgroundColor,
                  border: "none", // Removed border
                  borderRight: "1px solid #E0E0E0", // Added subtle right border for separation
                  paddingLeft: "15px",
                }}
              >
                <FaSearch style={{ color: "textColor" }} />
              </InputGroup.Text>
              <Form.Control
                placeholder="Search for AI tools (eg., video generation)"
                aria-label="Search"
                style={{ border: "none", boxShadow: "none" }} // Removed border and shadow from input
              />
              <Button
                variant="light"
                id="dropdown-filters"
                onClick={handleShowFilterModal} // Open modal on click
                style={{
                  backgroundColor: "cardBackgroundColor",
                  border: "none", // Removed border
                  borderLeft: "1px solid #E0E0E0", // Added subtle left border for separation
                  color: textColor,
                  zIndex: 0,
                }}
              >
                <FaFilter className="me-2" /> Filters
              </Button>

              <Button
                style={{
                  backgroundColor: "#7646C3",
                  borderColor: "#7646C3",
                  borderRadius: "0", // Kept sharp corners for search button
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  zIndex: 0,
                }}
              >
                <Link
                  to="/explore"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Search
                </Link>
              </Button>
            </InputGroup>
            <Button
              style={{
                backgroundColor: "#7646C3",
                borderColor: primaryLight,
                padding: "12px 30px",
                fontSize: "1.1rem",
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(147, 105, 218)", // Added shadow
              }}
              className="mt-3 rounded-pill" // Added rounded-pill for shape
            >
              <Link
                to="/explore"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Search &rarr;
              </Link>
            </Button>
            <div className="d-flex justify-content-center mt-5 gap-3">
              {["C", "M", "C", "D", "G"].map((letter, index) => (
                <div
                  key={index}
                  className="rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: cardBackgroundColor,
                    border: `1px solid #E0E0E0`,
                    color: "grey",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Added shadow
                  }}
                >
                  {letter}
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>

    {/* Filter Modal */}
    <Modal
      show={showFilterModal}
      onHide={handleCloseFilterModal}
      centered // Centers the modal vertically
      backdrop="static" // Disables closing when clicking outside
      keyboard={false} // Disables closing with escape key
    >
      <Modal.Header
        closeButton
        style={{ borderBottom: "none", paddingBottom: "0" }}
      >
        <Modal.Title className="fw-bold">Search Filters</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ padding: "0 20px" }}>
        <p className="text-muted mb-4" style={{ fontSize: "0.9rem" }}>
          Narrow down your search with these filters.
        </p>

        {/* Categories */}
        <Form.Group className="mb-4">
          <Form.Label className="fw-bold mb-3">Categories</Form.Label>
          <Row>
            {/* Changed Col md={6} to Col xs={6} for responsiveness */}
            <Col xs={6}>
              <Form.Check
                type="radio"
                id="category-text-tools"
                label="Text Tools"
                name="categories"
                value="Text Tools"
                checked={selectedCategory === "Text Tools"}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="mb-2"
              />
              <Form.Check
                type="radio"
                id="category-voice-Tools"
                label="Voice Tools"
                name="categories"
                value="Voice Tools"
                checked={selectedCategory === "Voice Tools"}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="mb-2"
              />
              <Form.Check
                type="radio"
                id="category-code-Tools"
                label="Code Tools"
                name="categories"
                value="Code Tools"
                checked={selectedCategory === "Code Tools"}
                onChange={(e) => setSelectedCategory(e.target.value)}
              />
            </Col>
            {/* Changed Col md={6} to Col xs={6} for responsiveness */}
            <Col xs={6}>
              <Form.Check
                type="radio"
                id="category-image-Tools"
                label="Image Tools"
                name="categories"
                value="Image Tools"
                checked={selectedCategory === "Image Tools"}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="mb-2"
              />
              <Form.Check
                type="radio"
                id="category-video-Tools"
                label="Video Tools"
                name="categories"
                value="Video Tools"
                checked={selectedCategory === "Video Tools"}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="mb-2"
              />
              <Form.Check
                type="radio"
                id="category-data-analysis"
                label="Data Analysis"
                name="categories"
                value="Data Analysis"
                checked={selectedCategory === "Data Analysis"}
                onChange={(e) => setSelectedCategory(e.target.value)}
              />
            </Col>
          </Row>
        </Form.Group>

        {/* Price */}
        <Form.Group className="mb-4">
          <Form.Label className="fw-bold mb-3">Price</Form.Label>
          <Row>
            {/* Changed Col md={6} to Col xs={6} for responsiveness */}
            <Col xs={6}>
              <Form.Check
                type="radio"
                id="price-free"
                label="Free"
                name="price"
                value="Free"
                checked={selectedPrice === "Free"}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="mb-2"
              />
              <Form.Check
                type="radio"
                id="price-free-trial"
                label="Free-Trial"
                name="price"
                value="Free-Trial"
                checked={selectedPrice === "Free-Trial"}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="mb-2"
              />
              <Form.Check
                type="radio"
                id="price-paid"
                label="Paid"
                name="price"
                value="Paid"
                checked={selectedPrice === "Paid"}
                onChange={(e) => setSelectedPrice(e.target.value)}
              />
            </Col>
            {/* Changed Col md={6} to Col xs={6} for responsiveness */}
            <Col xs={6}>
              <Form.Check
                type="radio"
                id="price-freemium"
                label="Freemium"
                name="price"
                value="Freemium"
                checked={selectedPrice === "Freemium"}
                onChange={(e) => setSelectedPrice(e.target.value)}
              />
              <Form.Check
                type="radio"
                id="price-pay-per-use"
                label="Pay Per Use"
                name="price"
                value="Pay Per Use"
                checked={selectedPrice === "Pay Per Use"}
                onChange={(e) => setSelectedPrice(e.target.value)}
              />
            </Col>
          </Row>
        </Form.Group>

        {/* Rating */}
        <Form.Group className="mb-4">
          <Form.Label className="fw-bold mb-3">Rating</Form.Label>
          <Row>
            {/* Changed Col md={6} to Col xs={6} for responsiveness */}
            <Col xs={6}>
              <Form.Check
                type="radio"
                id="rating-5plus"
                label={
                  <>
                    5+ <span className="text-warning">★</span>
                  </>
                }
                name="rating"
                value="5"
                checked={selectedRating === "5"}
                onChange={(e) => setSelectedRating(e.target.value)}
                className="mb-2"
              />
              <Form.Check
                type="radio"
                id="rating-3plus"
                label={
                  <>
                    3+ <span className="text-warning">★</span>
                  </>
                }
                name="rating"
                value="3"
                checked={selectedRating === "3"}
                onChange={(e) => setSelectedRating(e.target.value)}
              />
            </Col>
            {/* Changed Col md={6} to Col xs={6} for responsiveness */}
            <Col xs={6}>
              <Form.Check
                type="radio"
                id="rating-4plus"
                label={
                  <>
                    4+ <span className="text-warning">★</span>
                  </>
                }
                name="rating"
                value="4"
                checked={selectedRating === "4"}
                onChange={(e) => setSelectedRating(e.target.value)}
                className="mb-2"
              />
              <Form.Check
                type="radio"
                id="rating-2plus"
                label={
                  <>
                    2+ <span className="text-warning">★</span>
                  </>
                }
                name="rating"
                value="2"
                checked={selectedRating === "2"}
                onChange={(e) => setSelectedRating(e.target.value)}
              />
            </Col>
          </Row>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer
        className="d-flex justify-content-between"
        style={{ borderTop: "none", paddingTop: "0" }}
      >
        <Button
          variant="light"
          onClick={handleResetFilters}
          className="rounded-pill px-4 py-2"
        >
          Reset
        </Button>
        <Button
          style={{
            backgroundColor: "#7646C3",
            borderColor: "#7646C3",
          }}
          onClick={handleApplyFilters}
          className="rounded-pill px-4 py-2"
        >
          Apply Filters
        </Button>
      </Modal.Footer>
    </Modal>
    
      {/* How McCarthy Works Section */}
      <Container className="text-center my-5 py-5">
        <h2 className="fw-bold mb-3" style={{ color: "black", fontSize: "2.0rem" }}>
          How McCarthy Works
        </h2>
        <p className="lead mb-5" style={{ color: textColor }}>
          Discover, compare, and use AI tools without the hassle of switching
          between websites.
        </p>
        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <Card
              className={`h-100 shadow-sm border-0 rounded-4 p-3 ${
                hoveredHowItWorks === 0 ? "hover-effect" : ""
              }`}
              style={{ backgroundColor: cardBackgroundColor, cursor: "pointer" }}
              onMouseEnter={() => setHoveredHowItWorks(0)}
              onMouseLeave={() => setHoveredHowItWorks(null)}
              onClick={() => {
                /* Add navigation or action here */
              }}
            >
              <Card.Body>
                <div className="mb-3">
                  <FaSearch
                    size={40}
                    style={{
                      color: primaryLight,
                      backgroundColor: "#F0F0FF",
                      padding: "10px",
                      borderRadius: "12px",
                    }} // Increased padding and border radius for icons
                  />
                </div>
                <h5 className="fw-bold" style={{ color: "#333333" }}>
                  Search & Discover
                </h5>
                <p className="text-muted">
                  Explore our curated collection of AI tools categorized by use
                  case and functionality.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card
              className={`h-100 shadow-sm border-0 rounded-4 p-3 ${
                hoveredHowItWorks === 1 ? "hover-effect" : ""
              }`}
              style={{ backgroundColor: cardBackgroundColor, cursor: "pointer" }}
              onMouseEnter={() => setHoveredHowItWorks(1)}
              onMouseLeave={() => setHoveredHowItWorks(null)}
              onClick={() => {
                /* Add navigation or action here */
              }}
            >
              <Card.Body>
                <div className="mb-3">
                  <FaLightbulb
                    size={40}
                    style={{
                      color: "#FFD700",
                      backgroundColor: "#FFFBEB",
                      padding: "10px",
                      borderRadius: "12px",
                    }} // Increased padding and border radius for icons
                  />
                </div>
                <h5 className="fw-bold" style={{ color: "#333333" }}>
                  Compare & Choose
                </h5>
                <p className="text-muted">
                  Read reviews, compare features, and find the perfect AI tool
                  for your specific needs.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card
              className={`h-100 shadow-sm border-0 rounded-4 p-3 ${
                hoveredHowItWorks === 2 ? "hover-effect" : ""
              }`}
              style={{ backgroundColor: cardBackgroundColor, cursor: "pointer" }}
              onMouseEnter={() => setHoveredHowItWorks(2)}
              onMouseLeave={() => setHoveredHowItWorks(null)}
              onClick={() => {
                /* Add navigation or action here */
              }}
            >
              <Card.Body>
                <div className="mb-3">
                  <FaRocket
                    size={40}
                    style={{
                      color: "#FF6347",
                      backgroundColor: "#FFEEEA",
                      padding: "10px",
                      borderRadius: "12px",
                    }} // Increased padding and border radius for icons
                  />
                </div>
                <h5 className="fw-bold" style={{ color: "#333333" }}>
                  Use Instantly
                </h5>
                <p className="text-muted">
                  Launch tools directly from McCarthy and start creating without
                  any setup required.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    {/* Top Trending Tools Section */}
<div style={{ backgroundColor: "#eeebfc" }}>
  <Container className="my-5 py-5">
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h2 className="fw-bold" style={{ color: "#7646C3", fontSize: "2.5rem" }}>
        Top Trending Tools
      </h2>
      <Button
        variant="link"
        style={{ color: "#9369DA", textDecoration: "none" }}
      >
        <Link to="/explore" style={{ textDecoration: "none", color: "inherit" }}>
          {" "}
          View all tools &rarr;{" "}
        </Link>
      </Button>
    </div>
    <Row>
      {trendingTools.map((tool, index) => (
        <Col lg={4} md={6} className="mb-4" key={index}>
          <Card
            className="h-100 shadow-sm border-0 rounded-4 p-3"
            style={{ backgroundColor: "cardBackgroundColor" }}
          >
            {/* Added shadow and rounded-4 */}
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <img
                  src={tool.icon}
                  alt={tool.name}
                  style={{
                    width: "40px",
                    height: "40px",
                    marginRight: "15px",
                    borderRadius: "8px",
                  }}
                />
                <div>
                  <Card.Title className="mb-0 fw-bold" style={{ color: "#333333" }}>
                    {tool.name}
                  </Card.Title>
                  <div className="d-flex align-items-center">
                    {tool.status && (
                      <span
                        className="badge ms-2"
                        style={{
                          backgroundColor: "#E0F7FA",
                          color: "#007B8C",
                          fontWeight: "normal",
                        }}
                      >
                        {" "}
                        {tool.status}{" "}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <Card.Text className="text-muted mb-3">
                {" "}
                {tool.description}{" "}
              </Card.Text>
              <div className="mb-3">
                {tool.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="badge me-2 mb-2 rounded-pill" // Added rounded-pill for tag shape
                    style={{
                      backgroundColor: "#F0F0FF",
                      color: "#7646C3",
                      fontWeight: "Medium",
                      padding: "8px 12px",
                    }}
                  >
                    {" "}
                    {tag}{" "}
                  </span>
                ))}
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <Button
                  style={{
                    backgroundColor: "#7646C3",
                    borderColor: primaryLight,
                    borderRadius: "8px",
                    padding: "8px 20px",
                    boxShadow: "0 2px 5px rgba(138, 94, 253, 0.7)", // Added shadow
                  }}
                  className="rounded-pill" // Added rounded-pill for button shape
                >
                  {" "}
                  Use Now{" "}
                </Button>
                <div className="d-flex gap-2">
                  <Button
                    variant="light"
                    className="rounded-circle d-flex justify-content-center align-items-center shadow-sm" // Added shadow
                    style={{
                      width: "38px",
                      height: "38px",
                      border: `1px solid #E0E0E0`,
                      color: textColor,
                      backgroundColor: cardBackgroundColor,
                    }}
                  >
                    <FaHeart />
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
</div>

      {/* Browse by Category Section */}
      <Container className="my-5 py-5 text-center">
        <h2 className="fw-bold mb-3" style={{ color: "#7646C3", fontSize: "2.5rem" }}>
          Browse by Category
        </h2>
        <p className="lead mb-5" style={{ color: textColor }}>
          Find the perfect AI tool for your specific needs.
        </p>
        <Row className="justify-content-center g-4">
          {categories.map((category, index) => (
            <Col xs={6} sm={4} lg={2} className="mb-3" key={index}>
              <Card
                className={`h-100 border-0 shadow-sm rounded-4 d-flex flex-column justify-content-center align-items-center p-3 ${
                  hoveredCategory === index ? "hover-effect" : ""
                }`}
                style={{
                  minHeight: "150px",
                  backgroundColor: cardBackgroundColor,
                  cursor: "pointer",
                }}
                onMouseEnter={() => setHoveredCategory(index)}
                onMouseLeave={() => setHoveredCategory(null)}
                onClick={() => {
                  /* Add navigation or action here */
                }}
              >
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                  <Link to="/explore" style={{ textDecoration: "none", color: "inherit" }}>
                    {category.name === "Text Generation" && (
                      <img
                        src="https://img.icons8.com/ios-filled/50/document.png"
                        alt="Text Generation"
                        style={{ width: "40px", height: "40px", marginBottom: "10px" }}
                      />
                    )}
                  </Link>
                  <Link to="/explore" style={{ textDecoration: "none", color: "inherit" }}>
                    {category.name === "Image Generation" && (
                      <img
                        src="https://img.icons8.com/ios-filled/50/image.png"
                        alt="Image Generation"
                        style={{ width: "40px", height: "40px", marginBottom: "10px" }}
                      />
                    )}
                  </Link>
                  <Link to="/explore" style={{ textDecoration: "none", color: "inherit" }}>
                    {category.name === "Voice Generation" && (
                      <img
                        src="https://img.icons8.com/ios-filled/50/microphone.png"
                        alt="Voice Generation"
                        style={{ width: "40px", height: "40px", marginBottom: "10px" }}
                      />
                    )}
                  </Link>
                  <Link to="/explore" style={{ textDecoration: "none", color: "inherit" }}>
                    {category.name === "Video Generation" && (
                      <img
                        src="https://img.icons8.com/ios-filled/50/video-camera.png"
                        alt="Video Generation"
                        style={{ width: "40px", height: "40px", marginBottom: "10px" }}
                      />
                    )}
                  </Link>
                  <Link to="/explore" style={{ textDecoration: "none", color: "inherit" }}>
                    {category.name === "Code Generation" && (
                      <img
                        src="https://img.icons8.com/ios-filled/50/code.png"
                        alt="Code Generation"
                        style={{ width: "40px", height: "40px", marginBottom: "10px" }}
                      />
                    )}
                  </Link>
                  <Link to="/explore" style={{ textDecoration: "none", color: "inherit" }}>
                    {category.name === "Data Analysis" && (
                      <img
                        src="https://img.icons8.com/ios-filled/50/data-transfer.png"
                        alt="Data Analysis"
                        style={{ width: "40px", height: "40px", marginBottom: "10px" }}
                      />
                    )}
                  </Link>
                  <p className="fw-semibold mb-1" style={{ color: "#333333" }}>
                    {" "}
                    {category.name}{" "}
                  </p>
                  <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
                    {" "}
                    {category.tools} tools{" "}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Why McCarthy? Section */}
{/* Why McCarthy? Section */}
<div style={{ backgroundColor: "#eeebfc", marginBottom: "3rem" }}> {/* Added marginBottom */}
  <Container className="my-5 py-5 text-center">
    <h2 className="fw-bold mb-3" style={{ color: "#7646C3", fontSize: "2.3rem" }}>
      Why McCarthy?
    </h2>
    <p className="lead mb-5" style={{ color: textColor }}>
      We're not just a directory – we're your AI tool companion.
    </p>
    <Row className="justify-content-center g-4">
      {[
        {
          title: "All in One Place",
          description: "Access hundreds of AI tools without switching between websites.",
        },
        {
          title: "User Privacy First",
          description: "Transparent data policies so you know exactly what information is shared.",
        },
        {
          title: "Expert Curation",
          description: "Our team tests and reviews tools to ensure quality and usefulness.",
        },
        {
          title: "Personalized Recommendations",
          description: "Get AI tool suggestions based on your usage patterns and preferences.",
        },
      ].map((item, index) => (
        <Col md={3} key={index}>
          <Card
            className={`h-100 border-0 shadow-sm rounded-4 p-3 ${
              hoveredWhyMcCarthy === index ? "hover-effect" : ""
            }`}
            style={{ backgroundColor: cardBackgroundColor, cursor: "pointer" }}
            onMouseEnter={() => setHoveredWhyMcCarthy(index)}
            onMouseLeave={() => setHoveredWhyMcCarthy(null)}
            onClick={() => {
              /* Add navigation or action here */
            }}
          >
            <Card.Body>
              <h5 className="fw-bold mb-2" style={{ color: "#333333" }}>
                {" "}
                {item.title}{" "}
              </h5>
              <p className="text-muted"> {item.description} </p>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
</div>

{/* Ready to enhance your workflow with AI? Section */}
<div style={{ paddingLeft: "4rem", paddingRight: "4rem", paddingBottom: "4rem" }}>
  <div style={backgroundStyle}>
    <Container>
      <h2 style={{ fontWeight: "bold", fontSize: "2rem" }}>
        {" "}
        Ready to enhance your workflow with AI?{" "}
      </h2>
      <p style={{ fontSize: "1.25rem", marginTop: "15px" }}>
        {" "}
        Start exploring the world's best AI tools curated just for you.{" "}
      </p>
      <Button
        variant="light"
        style={{
          marginTop: "25px",
          padding: "10px 25px",
          fontWeight: "500",
          borderRadius: "25px",
        }}
      >
        <Link
          to="/explore"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Explore &rarr;
        </Link>
      </Button>
    </Container>
  </div>
</div>
    </div>
  );
}