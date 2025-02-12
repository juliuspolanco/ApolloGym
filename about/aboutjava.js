// Timeline data
const timelineData = [
    {
      year: '2010',
      title: 'The Foundation',
      description: 'Apollo Gym was founded with a vision to create a fitness sanctuary that would honor the spirit of strength and determination exemplified by the legendary Mighty Young Apollo.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000',
      preview: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400'
    },
    {
      year: '2013',
      title: 'Expansion Begins',
      description: 'Following the success of our first location, we began expanding our reach with specialized training programs inspired by classical strength training methods.',
      image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&q=80&w=1000',
      preview: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&q=80&w=400'
    },
    {
      year: '2016',
      title: 'Holistic Evolution',
      description: 'While maintaining our commitment to traditional training, we embraced modern fitness techniques and technology, creating a unique blend of old and new.',
      image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&q=80&w=1000',
      preview: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&q=80&w=400'
    },
    {
      year: '2018',
      title: 'Community Focus',
      description: 'We established a community hub where people of all backgrounds could come together for strength and fitness goals.',
      image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&q=80&w=1000',
      preview: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&q=80&w=400'
    },
    {
      year: '2021',
      title: 'The Future of Fitness',
      description: 'Today, Apollo Gym stands as a testament to our commitment to excellence, combining state-of-the-art facilities with timeless principles of strength and dedication.',
      image: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&q=80&w=1000',
      preview: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&q=80&w=400'
    },
  ];
  
  // Initialize Lucide icons
  lucide.createIcons();
  
  // Create timeline items
  const timelineSection = document.querySelector('.timeline');
  let activeIndex = 0;
  
  timelineData.forEach((item, index) => {
    const timelineItem = document.createElement('div');
    timelineItem.className = `timeline-item ${index === 0 ? 'active' : ''}`;
    timelineItem.setAttribute('data-index', index);
  
    const content = document.createElement('div');
    content.className = `timeline-content ${index % 2 === 0 ? 'left' : 'right'}`;
  
    content.innerHTML = `
      <div class="timeline-text ${index % 2 === 0 ? 'right' : ''}">
        <p class="timeline-label">APOLLO GYM</p>
        <img src="${item.preview}" alt="${item.title}" class="timeline-image">
        <h3 class="timeline-year">${item.year}</h3>
        <h4 class="timeline-title">${item.title}</h4>
        <p class="timeline-description">${item.description}</p>
      </div>
      <div class="timeline-spacer">
        <div class="timeline-dot ${index % 2 === 0 ? 'left' : 'right'}"></div>
      </div>
    `;
  
    timelineItem.appendChild(content);
    timelineSection.appendChild(timelineItem);
  });
  
  // Handle scroll events for timeline
  const timelineSectionEl = document.getElementById('timeline-section');
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  function handleScroll() {
    const rect = timelineSectionEl.getBoundingClientRect();
    const scrollPosition = window.scrollY + window.innerHeight * 0.6; // Adjusted trigger point
  
    let newActiveIndex = 0;
    timelineItems.forEach((item, index) => {
      const itemTop = item.offsetTop + timelineSectionEl.offsetTop;
      if (scrollPosition >= itemTop) {
        newActiveIndex = index;
      }
    });
  
    if (activeIndex !== newActiveIndex) {
      activeIndex = newActiveIndex;
      updateTimeline();
    }
  }
  
  function updateTimeline() {
    // Update active state
    timelineItems.forEach((item, index) => {
      item.classList.toggle('active', index === activeIndex);
    });
  
    // Preload the image before setting it as background
    const img = new Image();
    img.onload = function() {
      timelineSectionEl.style.backgroundImage = `url(${timelineData[activeIndex].image})`;
    };
    img.src = timelineData[activeIndex].image;
  }
  
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', () => {
    handleScroll(); // Initial check
    // Preload all timeline images
    timelineData.forEach(item => {
      const img = new Image();
      img.src = item.image;
    });
  });
  
  // Add resize handler to ensure correct positioning
  window.addEventListener('resize', handleScroll);