import Swal from 'sweetalert2';

export const showAlert = (message, type = 'error') => {
  Swal.fire({
    icon: type, // 'success', 'error', 'warning', 'info', 'question'
    title: type === 'error' ? 'Error' : 'Notice',
    text: message,
    confirmButtonText: 'OK',
  });
};
