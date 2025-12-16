
import { dotSpinner } from 'ldrs'
dotSpinner.register()


export default function Loader() {
    return (
        <div className="loader">
            <l-dot-spinner size="40" speed="0.9" color="black"></l-dot-spinner>
        </div>
    )
}