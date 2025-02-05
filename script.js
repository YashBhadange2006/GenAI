const facts = [
    { text: "I love hiking and have traveled to five national parks.", image: "url('https://files.oaiusercontent.com/file-Fa2h882r1eTh1YUR9wXnD9?se=2025-02-05T15%3A08%3A28Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D3b1ae710-f52e-4522-b070-8dc7b21db0e7.webp&sig=%2BuPs7/A4x2HBAr0FS3zwj6kAerSgZOQg2iPkdVsB8UI%3D')" },
    { text: "I am an avid reader and read around 20 books per year.", image: "url('https://cdn.leonardo.ai/users/528ba47b-8c65-4b52-83d0-ac739bb2586b/generations/8a84e6f5-2534-4103-a460-bb4f4e426d92/segments/4:4:1/Flux_Dev_Visualize_a_cozy_reading_nook_filled_with_stacks_of_b_3.jpeg')" },
    { text: "I once baked a 3-tiered cake for a family gathering!", image: "url('https://cdn.leonardo.ai/users/02b24885-146c-41a6-8a41-6af3efd789b0/generations/73438a62-ef06-475d-b810-e744839a4f1c/segments/4:4:1/Flux_Dev_Create_a_realistic_and_detailed_image_of_a_3tiered_ca_3.jpeg')" },
    { text: "I speak three languages fluently.", image: "url('https://cdn.leonardo.ai/users/528ba47b-8c65-4b52-83d0-ac739bb2586b/generations/5f006764-1a1c-4ccd-8da7-6eee40c586d5/segments/4:4:1/Flux_Dev_A_vibrant_illustration_featuring_three_flags_each_wav_3.jpeg')" },
    { text: "I'm learning to play the guitar in my free time.", image: "url('https://cdn.leonardo.ai/users/02b24885-146c-41a6-8a41-6af3efd789b0/generations/e7bf096b-de61-44d6-b131-6c00d282c5fe/segments/2:4:1/Flux_Dev_Create_an_artistic_image_of_a_cozy_room_during_the_ev_1.jpeg')" }
];

const factDisplay = document.getElementById('fact-display');
const generateButton = document.getElementById('generate-fact');

function generateRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const selectedFact = facts[randomIndex];
    
    factDisplay.textContent = selectedFact.text;
    factDisplay.classList.add('show'); 
    document.body.style.backgroundImage = selectedFact.image; // Change background image
}

generateButton.addEventListener('click', generateRandomFact);

generateRandomFact(); // Display a fact on page load

// Three.js Setup
const canvas = document.getElementById('three-canvas');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize( window.innerWidth, window.innerHeight );

// Create a 3D Cube 
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5; 

// Function to resize the canvas and update camera aspect ratio
function onWindowResize() {
    camera.aspect = canvas.clientWidth / canvas.clientHeight; 
    camera.updateProjectionMatrix(); 
    renderer.setSize(canvas.clientWidth, canvas.clientHeight); 
}

// Event listener to handle window resizing
window.addEventListener('resize', onWindowResize);

// Initial resize call
onWindowResize(); 

// Rendering Loop
function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
}
animate(); 
