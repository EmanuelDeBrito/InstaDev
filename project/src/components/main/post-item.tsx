import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { faComment } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const PostItem = () => {
    return(
        <div>
            <div>

            </div>

            <div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <FontAwesomeIcon 
                            icon={faHeart}
                            className="size-5"
                        />
                        <FontAwesomeIcon 
                            icon={faComment}
                            className="size-5"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}