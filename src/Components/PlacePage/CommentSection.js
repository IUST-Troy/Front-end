import React, { useEffect } from "react";
import axios from "axios";
import { async } from "q";

const CommentSection = ({ placeId }) => {
    const [postText, setPostText] = React.useState("");
    const [Comments, setComments] = React.useState(null);
    const baseURL = `https://mrsz.pythonanywhere.com/place/plaace/Place/${placeId}/comments/`;
    useEffect(() => {
        getComments();
    }, []);

    async function getComments() {
        axios
            .get(baseURL, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("acctoken")}`,
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                setComments(res.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }
    const handlePost = () => {
        axios
            .post(
                baseURL,
                {
                    text: postText,
                },
                {
                    headers: {
                        Authorization: `JWT ${localStorage.getItem(
                            "acctoken"
                        )}`,
                        "Content-Type": "application/json",
                    },
                }
            )
            .then((res) => {
                setPostText("");
                getComments();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <div className=" comment-section overflow-y-auto grid grid-cols-1 gap-2 py-3 px-5  w-full h-[30rem] ">
                {((Comments === null || Comments.length === 0) && (
                    <p>no comments</p>
                )) ||
                    Comments.map((c) => (
                        <div className="comment-bg rounded-xl h-full flex flex-col p-2">
                            <div className="flex flex-row gap-2 mb-2 items-center justify-start">
                                <p className="text-gray-700 text-xl">
                                    @{c.user.username}
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-700 text-lg w-[303px] h-fit truncate">
                                    {c.text}
                                </p>
                            </div>
                        </div>
                    ))}
            </div>
            <div className="flex flex-row px-5 gap-4 mt-3">
                <div class="w-full mb-4 rounded-lg comment-bg   ">
                    <div class="px-4 py-2 comment-bg rounded-t-lg dark:bg-gray-800">
                        <textarea
                            value={postText}
                            onChange={(e) => setPostText(e.target.value)}
                            id="comment"
                            rows="2"
                            class="w-full px-0 text-lg text-gray-700 comment-bg border-0 focus:ring-3 focus:ring-pallate-persian_green"
                            placeholder="Write a comment..."
                            required
                        ></textarea>
                    </div>
                    <div class="flex items-center justify-end px-3 py-2 border-t dark:border-gray-600">
                        <button
                            onClick={handlePost}
                            disabled={postText.length === 0}
                            type="submit"
                            class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-pallate-persian_green rounded-lg focus:ring-4 focus:ring-blue-200 disabled:bg-gray-600 disabled:hover:bg-gray-600 hover:bg-pallate-blue_munsell"
                        >
                            Post comment
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CommentSection;
