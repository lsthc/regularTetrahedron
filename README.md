# Regular Tetrahedron

## 프로젝트 소개

이 프로젝트는 가장 단순한 형태의 정다면체인 **Regular Tetrahedron**이 왜 정다면체인지, 그 수학적 정의와 기하학적 특징을 **3D 시각화**와 함께 설명하는 웹페이지입니다.

**사용된 언어**

* **HTML** 페이지 구조 및 설명 텍스트
* **CSS** 미니멀한 디자인, **CSS 3D Transform**
* **JavaScript** 마우스 움직임에 따른 3D 모델의 반응형 기울기(Tilt) Interactive Motion

## 핵심기능

* **3D visualize** 정사면체 모델이 자동으로 회전하며, 마우스 포인터의 위치에 따라 기울어져(Tilt) 입체감을 극대화
* **Minimal** 심플한 레이아웃을 사용하여 가독성을 높임

## structures 

### File

total 3 files
 index.html    
 style.css   
 script.js     

## Code

### 3D

정사면체 구현의 핵심은 CSS `transform` 속성을 활용한 기하학적 배치임.

* `perspective`: 3D 원근감을 설정
* `transform-style: preserve-3d`: 자식 요소들이 3D 공간에 배치되도록 설정
* **각 면의 배치** 수학적으로 계산된 `rotate` 및 `translateZ` 값을 조합하여 네 개의 정삼각형 면을 정확히 정사면체 형태로 조립

### Interaction

마우스의 `mousemove` 이벤트를 감지하여 현재 마우스 위치에 따라 `tetrahedron` 요소의 `rotateX` 및 `rotateY` 값에 작은 변화를 주어 사용자에게 반응하는 듯한 느낌을 제공합니다.

---

## 🔗 라이선스 (License)

이 프로젝트는 MIT 라이선스를 따릅니다.
