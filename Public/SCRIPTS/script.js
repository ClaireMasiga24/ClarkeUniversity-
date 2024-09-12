document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', (event) => {
      const errors = [];
  
      const firstName = form.querySelector('input[name="firstName"]').value.trim();
      const lastName = form.querySelector('input[name="lastName"]').value.trim();
      const course = form.querySelector('select[name="course"]').value;
      const entryScheme = form.querySelector('select[name="entryScheme"]').value;
      const intake = form.querySelector('select[name="intake"]').value;
      const sponsorship = form.querySelector('select[name="sponsorship"]').value;
      const gender = form.querySelector('input[name="gender"]:checked');
      const dob = form.querySelector('input[name="dob"]').value;
      const residence = form.querySelector('input[name="residence"]').value.trim();
  
      if (!firstName) errors.push('First name is required.');
      if (!lastName) errors.push('Last name is required.');
      if (!course) errors.push('Course selection is required.');
      if (!entryScheme) errors.push('Entry scheme selection is required.');
      if (!intake) errors.push('Intake selection is required.');
      if (!sponsorship) errors.push('Sponsorship selection is required.');
      if (!gender) errors.push('Gender selection is required.');
      if (!dob) errors.push('Date of birth is required.');
      if (!residence) errors.push('Residence is required.');
  
      if (errors.length > 0) {
        event.preventDefault();
        alert(errors.join('\n'));
      }
    });
  });
  