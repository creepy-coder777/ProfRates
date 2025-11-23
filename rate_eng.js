const scales = document.querySelectorAll('.scale');
        const ratings = {};
        const labels = [
            'Strongly Disagree',
            'Disagree',
            'Neither agree nor Disagree',
            'Agree',
            'Strongly Agree'
        ];

        scales.forEach((scale, index) => {
            const segments = scale.querySelectorAll('.segment');
            const questionNum = scale.dataset.question;
            const textElement = scale.parentElement.querySelector('.selected-text');

            segments.forEach(segment => {
                segment.addEventListener('click', () => {
                    const value = parseInt(segment.dataset.value);
                    ratings[questionNum] = value;

                    segments.forEach(seg => {
                        seg.classList.remove('pos-1', 'pos-2', 'pos-3', 'pos-4', 'pos-5');
                    });

                    segments.forEach((seg, i) => {
                        if (i < value) {
                            seg.classList.add(`pos-${i + 1}`);
                        }
                    });

                    // Update label text
                    if (textElement) {
                        textElement.textContent = labels[value - 1];
                    }
                });
            });
        });

        const reviewText = document.getElementById('reviewText');
        const charCount = document.getElementById('charCount');

        reviewText.addEventListener('input', () => {
            charCount.textContent = reviewText.value.length;
        });

        function submitRating() {
            const review = reviewText.value;
            const totalQuestions = scales.length;
            const answeredQuestions = Object.keys(ratings).length;

            if (answeredQuestions < totalQuestions) {
                alert(`Please answer all ${totalQuestions} questions before submitting.`);
                return;
            }

            alert('Thank you for your rating! Your review has been submitted.');
            console.log('Ratings:', ratings);
            console.log('Review:', review);
        }

        const dropdownToggle = document.getElementById('dropdownToggle');
        const dropdownMenu = document.getElementById('dropdownMenu');

        dropdownToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdownMenu.classList.toggle('show');
            dropdownToggle.classList.toggle('open');
        });

        document.addEventListener('click', function(e) {
            if (!dropdownMenu.contains(e.target) && e.target !== dropdownToggle) {
                dropdownMenu.classList.remove('show');
                dropdownToggle.classList.remove('open');
            }
        });