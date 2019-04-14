import { toast } from 'react-toastify';

class ToasterImplementer {

    success(message) { }

    error(message) { }

    warning(message) { }

    info(message) { }

}

export class ToastNotifier extends ToasterImplementer {

    options() {
        return {
            className: 'notifier'
        };
    }

    success(message) { toast.success(message, this.options()); }

    error(message) { toast.error(message, this.options()); }

    warning(message) { toast.warn(message, this.options()); }

    info(message) { toast.info(message, this.options()); }

}

export default class Toaster {

    constructor(implementer = new ToastNotifier()) {
        this.implementer = implementer;
    }

    success(message) {
        this.implementer.success(message);
    }

    error(message) {
        this.implementer.error(message);
    }

    warning(message) {
        this.implementer.warning(message);
    }

    info(message) {
        this.implementer.info(message);
    }

}
