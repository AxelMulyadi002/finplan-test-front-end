//layer 1
const camera = document.querySelector('.kamera');
const changeProfilePicture = document.getElementById('profil-nav');
const back = document.getElementById('panah');
const navCam = document.querySelector('.cam-nav');
const box = document.querySelectorAll('.kotak');

//layer 2
const picture = document.querySelector('.box-picture');
const btn = document.querySelectorAll('.button-layer-two');
const takeCamera = document.getElementById('take-from-camera');
const takeGallery = document.getElementById('take-from-gallery');

//layer 3
const profile = document.querySelector('.foto-profil');
const frame = document.querySelector('.frame');
const frameCircle = document.querySelector('.frame-circle');

//layer 4
const secondProfile = document.querySelector('.profil-two');
const saveFromPicture = document.querySelector('.save-from-picture');

//layer 5
const potongGambar = document.querySelector('.potong-gambar');
const save = document.querySelector('.tombol-full-two');

//layer 6
const finalProfile = document.querySelector('.final-profile');
const iTag = document.querySelector('.camera-i');

camera.addEventListener('click', function () {
	//buat ke halaman 2
	//halaman 1 di ilangin
	changeProfilePicture.innerHTML = 'Ganti Foto Profil';
	navCam.classList.add('d-none');
	box.forEach((kotak) => {
		kotak.classList.add('d-none');
	});

	// halaman6 diilangin
	finalProfile.classList.add('d-none');

	//halaman 2 dimunculin
	picture.classList.remove('d-none');
	btn.forEach((button) => {
		button.classList.remove('d-none');
	});
	saveFromPicture.classList.remove('d-none');
});

takeCamera.addEventListener('click', function () {
	//buat kehalaman 3 ambil dari kamera
	//halaman 2 diilangin
	changeProfilePicture.innerHTML = 'Ambil Foto';
	picture.classList.add('d-none');
	btn.forEach((button) => {
		button.classList.add('d-none');
	});
	saveFromPicture.classList.add('d-none');

	//halaman 4 diilangin
	secondProfile.classList.add('d-none');

	//halaman 3 dimunculin
	profile.classList.remove('d-none');
	frame.classList.remove('d-none');
	frameCircle.classList.remove('d-none');

	back.addEventListener('click', function () {
		changeProfilePicture.innerHTML = 'Ganti Foto Profil';
		navCam.classList.add('d-none');
		box.forEach((kotak) => {
			kotak.classList.add('d-none');
		});
		picture.classList.remove('d-none');
		btn.forEach((button) => {
			button.classList.remove('d-none');
		});
		saveFromPicture.classList.remove('d-none');

		back.addEventListener('click', function () {
			//ilangin halaman 2
			changeProfilePicture.innerHTML = 'Ambil Foto';
			picture.classList.add('d-none');
			btn.forEach((button) => {
				button.classList.add('d-none');
			});
			saveFromPicture.classList.add('d-none');

			//muncul halaman 3
			profile.classList.remove('d-none');
			frame.classList.remove('d-none');
			frameCircle.classList.remove('d-none');

			back.addEventListener('click', function () {
				changeProfilePicture.innerHTML = 'Ganti Foto Profil';
				profile.classList.add('d-none');
				frame.classList.add('d-none');
				frameCircle.classList.add('d-none');

				picture.classList.remove('d-none');
				btn.forEach((button) => {
					button.classList.remove('d-none');
				});
				saveFromPicture.classList.remove('d-none');
			});
		});
	});
});

frameCircle.addEventListener('click', function () {
	//buat ke halaman 4
	//halaman 3 diilangin
	changeProfilePicture.innerHTML = 'Ganti Foto Profil';
	profile.classList.add('d-none');
	frame.classList.add('d-none');
	frameCircle.classList.add('d-none');

	//halaman 4 dimunculin
	secondProfile.classList.remove('d-none');
	btn.forEach((button) => {
		button.classList.remove('d-none');
	});
	saveFromPicture.classList.remove('d-none');
});

saveFromPicture.addEventListener('click', function () {
	//halaman 4 diilangin
	changeProfilePicture.innerHTML = 'Profil';
	secondProfile.classList.add('d-none');
	btn.forEach((button) => {
		button.classList.add('d-none');
	});
	saveFromPicture.classList.add('d-none');

	//halaman 1 diilangin
	iTag.classList.add('d-none');

	//halaman 6 dimunculin
	finalProfile.classList.remove('d-none');
	navCam.classList.remove('d-none');
	box.forEach((kotak) => {
		kotak.classList.remove('d-none');
	});
});

takeGallery.addEventListener('click', function () {
	//buat ke halaman 5 ambil dari galery
	//halaman 4 diilangin
	changeProfilePicture.innerHTML = 'Potong Gambar';
	secondProfile.classList.add('d-none');
	btn.forEach((button) => {
		button.classList.add('d-none');
	});
	saveFromPicture.classList.add('d-none');

	//halaman 2 diilangin
	picture.classList.add('d-none');

	//halaman 5 dimunculin
	potongGambar.classList.remove('d-none');
	save.classList.remove('d-none');
});

save.addEventListener('click', function () {
	// buat ke halaman 6
	//halaman 5 diilangin
	changeProfilePicture.innerHTML = 'Profil';
	potongGambar.classList.add('d-none');
	save.classList.add('d-none');

	//halaman 1 diilangin
	iTag.classList.add('d-none');

	//halaman 6 munculin
	finalProfile.classList.remove('d-none');
	navCam.classList.remove('d-none');
	box.forEach((kotak) => {
		kotak.classList.remove('d-none');
	});
});

finalProfile.addEventListener('click', function () {
	//balik dari halaman 6 ke 4
	changeProfilePicture.innerHTML = 'Ganti Foto Profil';

	navCam.classList.add('d-none');
	box.forEach((kotak) => {
		kotak.classList.add('d-none');
	});

	//halaman 4 dimunculin
	secondProfile.classList.remove('d-none');
	btn.forEach((button) => {
		button.classList.remove('d-none');
	});
	saveFromPicture.classList.remove('d-none');

	back.addEventListener('click', function () {
		changeProfilePicture.innerHTML = 'Profil';
		finalProfile.classList.remove('d-none');
		navCam.classList.remove('d-none');
		box.forEach((kotak) => {
			kotak.classList.remove('d-none');
		});
		//halaman 2
		picture.classList.add('d-none');

		//halaman 3 diilangin
		profile.classList.add('d-none');
		frame.classList.add('d-none');
		frameCircle.classList.add('d-none');
	});
});

back.addEventListener('click', function () {
	//balik dari halaman 4 ke 3
	if (!secondProfile.classList.contains('d-none')) {
		//halaman 4 diilangin
		finalProfile.classList.add('d-none');
		secondProfile.classList.add('d-none');
		btn.forEach((button) => {
			button.classList.add('d-none');
		});
		saveFromPicture.classList.add('d-none');

		//halaman 3 dimunculin
		profile.classList.remove('d-none');
		frame.classList.remove('d-none');
		frameCircle.classList.remove('d-none');
	}

	//balik dari halaman 3 ke 2
	else if (!profile.classList.contains('d-none')) {
		//halaman 3 diilangin
		profile.classList.add('d-none');
		frame.classList.add('d-none');
		frameCircle.classList.add('d-none');

		//halaman 2 dimunculin
		picture.classList.remove('d-none');
		btn.forEach((button) => {
			button.classList.remove('d-none');
		});
	}

	//balik dari halaman 2 ke 1
	else if (!picture.classList.contains('d-none')) {
		//halaman 2 diilangin
		picture.classList.add('d-none');
		btn.forEach((button) => {
			button.classList.add('d-none');
		});
		saveFromPicture.classList.add('d-none');
		//halaman 1 dimunculin
		changeProfilePicture.innerHTML = 'Profil';
		navCam.classList.remove('d-none');
		box.forEach((kotak) => {
			kotak.classList.remove('d-none');
		});
		iTag.classList.remove('d-none');
	}
});
