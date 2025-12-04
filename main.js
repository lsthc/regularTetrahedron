// main.js

// Three.js 라이브러리가 로드된 후 실행되도록 지연
function createTetrahedron() {
    // THREE가 전역 객체로 로드되었는지 확인
    if (typeof THREE === 'undefined') {
        console.error("Three.js 라이브러리가 로드되지 않았습니다.");
        return;
    }

    const container = document.getElementById('three-container');
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. 장면(Scene) 및 카메라(Camera) 설정
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 3;

    // 2. 렌더러(Renderer) 설정
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // 3. 정사면체 (Tetrahedron) 생성
    // 💡 정다면체 Geometry: TetrahedronGeometry, BoxGeometry(정육면체), IcosahedronGeometry 등
    const geometry = new THREE.TetrahedronGeometry(1); // 반지름 1인 정사면체
    
    // 재질 및 색상 설정
    const material = new THREE.MeshPhongMaterial({ 
        color: 0x5c7cfa, 
        wireframe: false, 
        transparent: true,
        opacity: 0.7 
    });
    
    const tetrahedron = new THREE.Mesh(geometry, material);
    scene.add(tetrahedron);

    // 4. 조명(Light) 추가 - MeshPhongMaterial 사용 시 필수
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // 5. 애니메이션 루프
    function animate() {
        requestAnimationFrame(animate);

        // 정사면체 회전
        tetrahedron.rotation.x += 0.005;
        tetrahedron.rotation.y += 0.005;

        renderer.render(scene, camera);
    }

    animate();
}

window.addEventListener('load', createTetrahedron);
